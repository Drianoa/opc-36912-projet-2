import { Component, inject, Input } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { OlympicService } from '../../core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ChartHeaderComponent } from '../../dashboard/components/chart-header/chart-header.component';
import { StatCardComponent } from '../../dashboard/components/chart-header/stat-card/stat-card.component';
import { CountryChartComponent } from '../../dashboard/components/charts/country-chart/country-chart.component';
import { ChartsComponent } from '../../dashboard/components/charts/charts.component';
import { Olympic } from '../../core/models/Olympic';
import { Series } from '@swimlane/ngx-charts/lib/models/chart-data.model';

@Component({
  selector: 'app-contry-detail',
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
export class CountryDetailComponent {
  private olympicService = inject(OlympicService)
  private router = inject(Router)
  totalNumberOfMedals$ = of(0)
  totalNumberOfAthletes$ = of(0)
  numberOfEntries$ = of(0)
  chartSeries$!: Observable<Series>
  countryName = ''

  @Input()
  set id(value: string) {

    this.olympicService.getOlympicByName(value)
      .pipe(
        tap((value) => console.log(value))
      )
      .subscribe(olympic => {

        if (!olympic) {
          this.router.navigateByUrl('/not-found');
        } else {
          console.log(olympic)
          this.countryName = olympic.country;
          this.totalNumberOfMedals$ = this.olympicService.getTotalNumberOfMedals(value)
          this.totalNumberOfAthletes$ = this.olympicService.getTotalNumberOfAthletes(value)
          this.numberOfEntries$ = this.olympicService.getNumberOfEntries(value)
          this.chartSeries$ = this.olympicService.getOlympicByName(value)
            .pipe(
              map(olympic => this.mapToChartData(olympic)),
              tap(data => console.log(data))
            )
        }
      });
  }

  mapToChartData(olympic: Olympic): Series {
    console.log(olympic)
    return {
      name: olympic?.country,
      series: olympic?.participations.map(participation => ({
        name: participation.year,
        value: participation.medalsCount
      }))
    };
  }
}
