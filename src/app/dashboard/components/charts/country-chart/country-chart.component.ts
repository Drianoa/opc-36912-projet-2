import { Component, Input } from '@angular/core';
import { LineChartModule } from '@swimlane/ngx-charts';
import {Series} from '@swimlane/ngx-charts/lib/models/chart-data.model';

@Component({
  selector: 'app-country-chart',
  imports: [
    LineChartModule
  ],
  templateUrl: './country-chart.component.html',
  styleUrl: './country-chart.component.scss'
})
export class CountryChartComponent {
  @Input() olympicSeries!: Series
  view: [number, number] = [700, 400];
}
