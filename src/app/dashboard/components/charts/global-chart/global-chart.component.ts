import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OlympicService } from '../../../../core/services/olympic.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataItem } from '@swimlane/ngx-charts/lib/models/chart-data.model';

@Component({
  selector: 'app-global-chart',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './global-chart.component.html',
  styleUrl: './global-chart.component.scss'
})
export class GlobalChartComponent {

  private router = inject(Router)
  private olympicService = inject(OlympicService)

  pieValues$!: Observable<DataItem[] | undefined>;

  view: [number, number] = [700, 400];

  // options
  gradient = true;

  colorScheme = "cool";

  constructor() {
    this.pieValues$ = this.olympicService.getOlympicsPieData()
  }

  onSelect(event: any): void {
    this.router.navigate(['country', event.name])
  }
}
