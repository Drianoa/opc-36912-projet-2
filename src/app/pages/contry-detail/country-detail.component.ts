import { Component, inject, Input, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, switchMap, tap } from 'rxjs';
import { OlympicService } from '../../core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartHeaderComponent } from '../../dashboard/components/chart-header/chart-header.component';
import { StatCardComponent } from '../../dashboard/components/chart-header/stat-card/stat-card.component';
import { Olympic } from '../../core/models/Olympic';
import { Series } from '@swimlane/ngx-charts/lib/models/chart-data.model';
import { CountryChartComponent } from '../../dashboard/components/charts/country-chart/country-chart.component';
import { ChartsComponent } from '../../dashboard/components/charts/charts.component';

@Component({
  selector: 'app-country-detail',
  imports: [
    StatCardComponent,
    AsyncPipe,
    ChartHeaderComponent,
    CountryChartComponent,
    ChartsComponent
  ],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {
  private olympicService = inject(OlympicService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)

  private idSubject$ = new BehaviorSubject<string | null>(null);
  private id$ = this.idSubject$.asObservable();

  view: [number, number] = [700, 400];

  olympic$: Observable<Olympic> = this.id$.pipe(
    filter((id): id is string => !!id), // On attend un id valide
    switchMap(id =>
      this.olympicService.loadInitialData().pipe( // Charge les données à chaque changement de page
        switchMap(() => this.olympicService.getOlympicByName(decodeURIComponent(id)))
      )
    ),
    tap(olympic => {
      if (!olympic) {
        console.warn('Olympic not found for id:', this.idSubject$.value);
        this.router.navigateByUrl('/not-found');
      }
    }),
    filter(olympic => !!olympic),
  );


  totalNumberOfMedals$ = this.olympic$.pipe(
    switchMap(olympic => this.olympicService.getTotalNumberOfMedals(olympic.country))
  );

  totalNumberOfAthletes$ = this.olympic$.pipe(
    switchMap(olympic => this.olympicService.getTotalNumberOfAthletes(olympic.country))
  );

  numberOfEntries$ = this.olympic$.pipe(
    switchMap(olympic => this.olympicService.getNumberOfEntries(olympic.country))
  );

  chartSeries$: Observable<Series[]> = this.olympic$.pipe(
    map(this.mapToChartData),
    map(data => [data]),
    tap(data => console.log(`chart data:`, data))
  );

  countryName$: Observable<string> = this.id$.pipe(
    filter((id): id is string => !!id)
  );

  @Input()
  set id(value: string) {
    console.log(`input received: ${value}`);
    this.idSubject$.next(value);
  }

  ngOnInit(): void {
    // Si accès direct par URL
    this.route.paramMap
      .pipe(map(params => params.get('id')))
      .subscribe(id => {
        if (id) {
          console.log(`param received: ${id}`);
          this.idSubject$.next(id);
        }
      });
  }

  goTo(id: string) {
    this.router.navigateByUrl(`/country/${encodeURIComponent(id)}`);
  }


  mapToChartData(olympic: Olympic): Series {
    return {
      name: olympic.country,
      series: olympic.participations.map(participation => ({
        name: participation.year.toString(),
        value: participation.medalsCount
      }))
    };
  }
}
