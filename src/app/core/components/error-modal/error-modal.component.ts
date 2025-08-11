import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss',
})
export class ErrorModalComponent {
  @Input() title = 'Error';
  @Input() message = 'An unexpected error occurred. Please try again.';
  @Input() buttonText = 'Close';

  private modalService = inject(ModalService);
  private router = inject(Router);

  closeModal(): void {
    this.modalService.hideErrorModal();
    this.router.navigate(['/']);
  }
}
