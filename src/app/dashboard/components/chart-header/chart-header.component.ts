import { Component, inject } from '@angular/core';
import { OlympicService } from '../../../core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-chart-header',
  imports: [
    AsyncPipe,
    StatCardComponent
  ],
  templateUrl: './chart-header.component.html',
  styleUrl: './chart-header.component.scss'
})
export class ChartHeaderComponent {
  private olympicService = inject(OlympicService);
  countrys$ = this.olympicService.getOlympicCountrysNumber();
  games$ = this.olympicService.getOlympicGamesNumber();

}
