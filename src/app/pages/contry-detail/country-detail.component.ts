import { Component, inject, Input } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { OlympicService } from '../../core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ChartHeaderComponent } from '../../dashboard/components/chart-header/chart-header.component';
import { StatCardComponent } from '../../dashboard/components/chart-header/stat-card/stat-card.component';
import { CountryChartComponent } from '../../dashboard/components/charts/country-chart/country-chart.component';
import { ChartsComponent } from '../../dashboard/components/charts/charts.component';
import { Participation } from '../../core/models/Participation';

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
  participations$: Observable<Participation[]> = of([])
  countryName = ''

  @Input()
  set id(value: string) {
    this.participations$ = this.olympicService.getOlympicByName(value)
      .pipe(map(olympic => olympic?.participations || []))

    this.olympicService.getOlympicByName(value).subscribe(olympic => {
      if (!olympic) {
        this.router.navigateByUrl('/not-found');
      } else {
        this.countryName = olympic.country;
        this.totalNumberOfMedals$ = this.olympicService.getTotalNumberOfMedals(value)
        this.totalNumberOfAthletes$ = this.olympicService.getTotalNumberOfAthletes(value)
        this.numberOfEntries$ = this.olympicService.getNumberOfEntries(value)
      }
    });
  }
}
