import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { OlympicService } from '../../../../core/services/olympic.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataItem } from '@swimlane/ngx-charts/lib/models/chart-data.model';
import { ChartsService } from '../../../../core/services/charts.service';

@Component({
  selector: 'app-global-chart',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './global-chart.component.html',
  styleUrl: './global-chart.component.scss'
})
export class GlobalChartComponent {

  private router = inject(Router)
  private olympicService = inject(OlympicService)
  private chartService = inject(ChartsService)

  pieValues$!: Observable<DataItem[] | undefined>;
  view: Signal<[number, number]> = this.chartService.chartSize

  gradient = true;
  colorScheme = "cool";

  constructor() {
    this.pieValues$ = this.olympicService.getOlympicsPieData()
  }

  onSelect(event: DataItem): void {
    console.dir(event);
    this.router.navigate(['country', event.name])
  }
}
