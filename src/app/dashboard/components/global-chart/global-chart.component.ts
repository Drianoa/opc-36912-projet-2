import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OlympicService } from '../../../core/services/olympic.service';
import { Observable } from 'rxjs';
import { PieEntry } from '../../../core/models/PieEntry';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './global-chart.component.html',
  styleUrl: './global-chart.component.scss'
})
export class GlobalChartComponent {

  private olympicService = inject(OlympicService)

  pieValues$!: Observable<PieEntry[] | undefined>;

  view: [number, number] = [700, 400];

  // options
  gradient = true;

  colorScheme = "cool";

  constructor() {
    this.pieValues$ = this.olympicService.getOlympicsPieData()
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
