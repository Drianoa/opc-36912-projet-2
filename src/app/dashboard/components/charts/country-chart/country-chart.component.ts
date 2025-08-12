import { Component, inject, Input, Signal } from '@angular/core';
import { LineChartModule } from '@swimlane/ngx-charts';
import { Series } from '@swimlane/ngx-charts/lib/models/chart-data.model';
import { ChartsService } from '../../../../core/services/charts.service';

@Component({
  selector: 'app-country-chart',
  imports: [
    LineChartModule
  ],
  templateUrl: './country-chart.component.html',
  styleUrl: './country-chart.component.scss'
})
export class CountryChartComponent {
  @Input() olympicSeries!: Series[]
  private chartService = inject(ChartsService)

  view: Signal<[number, number]> = this.chartService.chartSize
  
  colorScheme = "cool";
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
  autoScale = true;
}
