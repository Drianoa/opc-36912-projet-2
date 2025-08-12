import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  private chartSizeSignal = signal<[number, number]>([700, 400]);
  private ratio = 1.75;

  chartSize = this.chartSizeSignal.asReadonly();

  setChartSize(maxWidth: number, maxHeight: number) {
    const newSize = this.calculateChartSize(maxWidth, maxHeight);
    this.chartSizeSignal.update(() => newSize);
  }

  /**
   * Calculate the new width and height based on the maximum width and height.
   * New with and Height should not be greater than max width and max height depending on ratio but minimum 200px
   * @private
   */
  private calculateChartSize(maxWidth: number, maxHeight: number): [number, number] {
    let newHeight = Math.min(maxHeight, maxWidth / this.ratio);
    newHeight = Math.max(newHeight, 200);
    const newWidth = this.ratio * newHeight;
    console.log([newWidth, newHeight])
    return [newWidth, newHeight];
  }
}
