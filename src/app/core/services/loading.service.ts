import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private showLoadingModal = signal<boolean>(false);

  loadingModalVisible = this.showLoadingModal.asReadonly();

  toogleLoadingModal(shouldShow: boolean) {
    this.showLoadingModal.update((_) => shouldShow);
  }
}
