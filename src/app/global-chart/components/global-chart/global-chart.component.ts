import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LegendPosition, NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-global-chart',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './global-chart.component.html',
  styleUrl: './global-chart.component.scss'
})
export class GlobalChartComponent {
  single: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;

  colorScheme = "cool";

  constructor() {
    Object.assign(this, {single: [...this.single]});
  }

  onSelect(event: any): void {
    console.log('Item selected', event);
  }

  onActivate(event: any): void {
    console.log('Activate', event);
  }

  onDeactivate(event: any): void {
    console.log('Deactivate', event);
  }
}
