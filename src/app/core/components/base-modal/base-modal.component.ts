import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})
export class BaseModalComponent {
  @Input() title = '';
  @Input() message = '';
  @Input() buttonText = 'Close';
}
