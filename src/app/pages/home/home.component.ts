import { Component, inject } from '@angular/core';
import { ChartHeaderComponent } from '../../dashboard/components/chart-header/chart-header.component';
import { GlobalChartComponent } from '../../dashboard/components/global-chart/global-chart.component';
import { OlympicService } from '../../core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { StatCardComponent } from '../../dashboard/components/chart-header/stat-card/stat-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ChartHeaderComponent, GlobalChartComponent, AsyncPipe, StatCardComponent],
})
export class HomeComponent {
  private olympicService = inject(OlympicService);
  countrys$ = this.olympicService.getOlympicCountrysNumber();
  games$ = this.olympicService.getOlympicGamesNumber();
}
