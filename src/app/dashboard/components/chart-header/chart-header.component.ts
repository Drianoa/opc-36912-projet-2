import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart-header',
  templateUrl: './chart-header.component.html',
  styleUrls: ['./chart-header.component.scss']
})
export class ChartHeaderComponent {
  @Input() title: string | null = '';
}
