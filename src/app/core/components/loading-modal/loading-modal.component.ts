import { Component } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  imports: [
    BaseModalComponent
  ],
  styleUrls: ['./loading-modal.component.scss', '../base-modal/base-modal.component.scss']
})
export class LoadingModalComponent extends BaseModalComponent {
  constructor() {
    super();
    this.message = 'Loading...';
  }
}
