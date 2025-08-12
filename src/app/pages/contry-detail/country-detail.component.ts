import { Component, inject, OnInit } from '@angular/core';
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
  private name$ = this.idSubject$.asObservable();

  olympic$: Observable<Olympic> = this.name$.pipe(
    filter((name): name is string => !!name), // On attend un id valide
    switchMap(name => this.olympicService.getOlympicByName(decodeURIComponent(name))),
    tap(olympic => {
      if (!olympic) {
        console.warn('Olympic not found for name:', this.idSubject$.value);
        this.router.navigate(['not-found']);
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
    map(this.olympicService.mapToChartData),
    map(data => [data]),
  );

  countryName$: Observable<string> = this.name$.pipe(
    filter((name): name is string => !!name)
  );

  ngOnInit(): void {
    // Si accès direct par URL
    this.olympicService.loadInitialData().pipe(
      switchMap(() => this.route.paramMap
        .pipe(
          map(params => params.get('name')),
          tap(name => this.idSubject$.next(name))
        )
      ),
    ).subscribe();
  }
}
