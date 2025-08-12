import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  imports: [
    BaseModalComponent
  ],
  styleUrls: ['./error-modal.component.scss', '../base-modal/base-modal.component.scss']
})
export class ErrorModalComponent extends BaseModalComponent {
  constructor() {
    super();
    this.title = 'Error';
    this.message = 'An unexpected error occurred. Please try again.';
    this.buttonText = 'Close';
  }

  private modalService = inject(ModalService);
  private router = inject(Router);

  closeModal(): void {
    this.modalService.hideErrorModal();
    this.router.navigate(['/']);
  }
}
