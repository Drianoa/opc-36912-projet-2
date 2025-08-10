import { AfterViewInit, Component, ElementRef, inject, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsService } from '../../../core/services/charts.service';

@Component({
  selector: 'app-charts',
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('chartContainer', {static: true}) chartContainerRef!: ElementRef<HTMLDivElement>;

  private chartSizeService = inject(ChartsService);
  private resizeObserver!: ResizeObserver;
  private resizeListener: () => void;

  constructor() {
    this.resizeListener = () => this.updateChartSize();
  }

  ngAfterViewInit() {
    this.setupResizeObserver();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    this.cleanupResizeObserver();
    window.removeEventListener('resize', this.resizeListener);
  }

  private setupResizeObserver() {
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.updateChartSize());
      this.resizeObserver.observe(this.chartContainerRef.nativeElement);
    }
    this.updateChartSize();
  }

  private cleanupResizeObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  private updateChartSize() {
    if (!this.chartContainerRef?.nativeElement) return;

    const container = this.chartContainerRef.nativeElement;
    const containerRect = container.getBoundingClientRect();

    // Calculer la hauteur maximale disponible
    const maxHeight = window.innerHeight - containerRect.top
    const containerWidth = container.clientWidth

    if (containerWidth > 0 && maxHeight > 0) {
      this.chartSizeService.setChartSize(containerWidth, maxHeight);
    }
  }
}
