import { Component, inject, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { OlympicService } from './core/services/olympic.service';
import { RouterOutlet } from '@angular/router';
import { LoadingModalComponent } from './core/components/loading-modal/loading-modal.component';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LoadingModalComponent]
})
export class AppComponent implements OnInit {
  private olympicService = inject(OlympicService);
  private loadingService = inject(LoadingService)

  loadingModalVisible = this.loadingService.loadingModalVisible


  ngOnInit(): void {
    this.olympicService.loadInitialData().pipe(take(1)).subscribe();
  }
}


