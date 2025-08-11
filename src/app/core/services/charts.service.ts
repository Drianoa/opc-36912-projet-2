import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  private chartSizeSignal = signal<[number, number]>([700, 400]);
  private factor = 1.75;

  chartSize = this.chartSizeSignal.asReadonly();

  setChartSize(maxWidth: number, maxHeight: number) {
    const newSize = this.calculateChartSize(maxWidth, maxHeight);
    this.chartSizeSignal.update(() => newSize);
  }

  /**
   * Calculate the new width and height based on the maximum width and height.
   * New with and Height should not be greater than max width and max height depending on factor
   * @param maxWidth
   * @param maxHeight
   * @private
   */
  private calculateChartSize(maxWidth: number, maxHeight: number): [number, number] {
    const calcHeightIfMaxWidth = maxWidth / this.factor;

    if (calcHeightIfMaxWidth < maxHeight) {
      return [maxWidth, calcHeightIfMaxWidth];
    }
    return [maxWidth * this.factor, maxHeight];
  }
}
