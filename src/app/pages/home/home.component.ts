import { Component, OnInit, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { Olympic } from '../../core/models/Olympic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [AsyncPipe],
  standalone: true
})
export class HomeComponent implements OnInit {
  private olympicService = inject(OlympicService);

  public olympics$: Observable<Olympic[] | null | undefined> = of(null);

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
  }
}
