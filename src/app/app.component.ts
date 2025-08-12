import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingModalComponent } from './core/components/loading-modal/loading-modal.component';
import { ModalService } from './core/services/modal.service';
import { BackButtonComponent } from './dashboard/components/back-button/back-button.component';
import { ErrorModalComponent } from './core/components/error-modal/error-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, LoadingModalComponent, BackButtonComponent, ErrorModalComponent]
})
export class AppComponent {
  private loadingService = inject(ModalService)

  loadingModalVisible = this.loadingService.loadingModalVisible
  errorModalVisible = this.loadingService.errorModalVisible

}


