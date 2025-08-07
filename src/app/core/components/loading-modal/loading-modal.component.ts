import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-loading-modal',
  imports: [],
  templateUrl: './loading-modal.component.html',
  styleUrl: './loading-modal.component.scss'
})
export class LoadingModalComponent {
  loadingModalVisible = signal(false);
}
