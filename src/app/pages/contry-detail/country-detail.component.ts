import { Component, inject, Input } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of, switchMap, tap } from 'rxjs';
import { OlympicService } from '../../core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ChartHeaderComponent } from '../../dashboard/components/chart-header/chart-header.component';
import { StatCardComponent } from '../../dashboard/components/chart-header/stat-card/stat-card.component';
import { ChartsComponent } from '../../dashboard/components/charts/charts.component';
import { Olympic } from '../../core/models/Olympic';
import { Series } from '@swimlane/ngx-charts/lib/models/chart-data.model';

@Component({
  selector: 'app-country-detail',
  imports: [
    StatCardComponent,
    AsyncPipe,
    ChartHeaderComponent,
    ChartsComponent
  ],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent {
  private olympicService = inject(OlympicService)
  private router = inject(Router)

  private idSubject$ = new BehaviorSubject<string | null>(null);
  private id$ = this.idSubject$.asObservable();

  olympic$: Observable<Olympic> = this.id$.pipe(
    switchMap(id => id ? this.olympicService.getOlympicByName(id) : of(undefined)),
    tap(olympic => {
      if (!olympic) {
        this.router.navigateByUrl('/not-found');
      }
    }),
    filter((olympic): olympic is Olympic => olympic !== undefined)
  );

  totalNumberOfMedals$ = this.olympic$.pipe(
    switchMap(olympic => olympic ? this.olympicService.getTotalNumberOfMedals(olympic.country) : of(0))
  );

  totalNumberOfAthletes$ = this.olympic$.pipe(
    switchMap(olympic => olympic ? this.olympicService.getTotalNumberOfAthletes(olympic.country) : of(0))
  );

  numberOfEntries$ = this.olympic$.pipe(
    switchMap(olympic => olympic ? this.olympicService.getNumberOfEntries(olympic.country) : of(0))
  );

  // chartSeries$: Observable<Series> = this.olympic$.pipe(
  //   map(olympic => this.mapToChartData(olympic)),
  //   tap(data => console.log(`chart data:`, data))
  // );

  countryName$: Observable<string> = this.olympic$.pipe(
    map(olympic => olympic.country)
  );

  @Input()
  set id(value: string) {
    console.log(`input received: ${value}`);
    this.idSubject$.next(value);
  }


  mapToChartData(olympic: Olympic): Series {
    return {
      name: olympic.country ?? '',
      series: olympic.participations.map(participation => ({
        name: participation.year.toString(), // Assurez-vous que 'name' est une chaîne
        value: participation.medalsCount
      })) ?? []
    };
  }
}
