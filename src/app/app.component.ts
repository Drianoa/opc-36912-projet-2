import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingModalComponent } from './core/components/loading-modal/loading-modal.component';
import { LoadingService } from './core/services/loading.service';
import { BackButtonComponent } from './dashboard/components/back-button/back-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LoadingModalComponent, BackButtonComponent]
})
export class AppComponent {
  private loadingService = inject(LoadingService)

  loadingModalVisible = this.loadingService.loadingModalVisible

}


