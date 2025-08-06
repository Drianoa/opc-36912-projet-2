import { Component, Input } from '@angular/core';
import { LineChartModule } from '@swimlane/ngx-charts';
import { Participation } from '../../../../core/models/Participation';

@Component({
  selector: 'app-country-chart',
  imports: [
    LineChartModule
  ],
  templateUrl: './country-chart.component.html',
  styleUrl: './country-chart.component.scss'
})
export class CountryChartComponent {
  @Input() participations: Participation[] = []
  view: [number, number] = [700, 400];
}
