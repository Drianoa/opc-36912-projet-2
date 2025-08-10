import { Component, inject, OnInit } from '@angular/core';
import { ChartHeaderComponent } from '../../dashboard/components/chart-header/chart-header.component';
import { GlobalChartComponent } from '../../dashboard/components/charts/global-chart/global-chart.component';
import { OlympicService } from '../../core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { StatCardComponent } from '../../dashboard/components/chart-header/stat-card/stat-card.component';
import { ChartsComponent } from '../../dashboard/components/charts/charts.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ChartHeaderComponent, GlobalChartComponent, AsyncPipe, StatCardComponent, ChartsComponent],
})
export class HomeComponent implements OnInit {
  private olympicService = inject(OlympicService);
  countrys$ = this.olympicService.getOlympicCountrysNumber();
  games$ = this.olympicService.getOlympicGamesNumber();


  ngOnInit(): void {
    this.olympicService.loadInitialData().subscribe();
  }
}
