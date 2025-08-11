import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private showLoadingModal = signal<boolean>(false);
  private showErrorModal = signal<boolean>(false);

  loadingModalVisible = this.showLoadingModal.asReadonly();
  errorModalVisible = this.showErrorModal.asReadonly();

  toogleLoadingModal(shouldShow: boolean) {
    this.showLoadingModal.update(() => shouldShow);
  }

  displayErrorModal() {
    this.showErrorModal.update(() => true);
  }

  hideErrorModal() {
    this.showErrorModal.update(() => false);
  }
}
