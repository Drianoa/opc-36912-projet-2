import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-stat-card',
  imports: [
    DecimalPipe
  ],
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.scss'
})
export class StatCardComponent {
  @Input() label: string = '';
  @Input() value: number | string | null | undefined = null;
  protected readonly isNaN = isNaN;
}
