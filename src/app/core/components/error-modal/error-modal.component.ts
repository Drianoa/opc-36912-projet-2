import { Component, inject, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';


@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrl: './error-modal.component.scss',
  standalone: true,
  imports: []
})
export class ErrorModalComponent {
  @Input() title: string = 'Error';
  @Input() message: string = 'An unexpected error occurred. Please try again.';
  @Input() buttonText: string = 'Close';

  private modalService = inject(ModalService);

  closeModal(): void {
    this.modalService.hideErrorModal();
  }
}
