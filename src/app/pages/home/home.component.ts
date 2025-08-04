import { Component } from '@angular/core';
import { ChartHeaderComponent } from '../../dashboard/components/chart-header/chart-header.component';
import { GlobalChartComponent } from '../../dashboard/components/global-chart/global-chart.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [ChartHeaderComponent, GlobalChartComponent],
  standalone: true
})
export class HomeComponent {
}
