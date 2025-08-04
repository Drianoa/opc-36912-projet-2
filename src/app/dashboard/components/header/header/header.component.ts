import { Component, inject, OnInit } from '@angular/core';
import { OlympicService } from '../../../../core/services/olympic.service';
import { AsyncPipe } from '@angular/common';
import { async } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private olympicService = inject(OlympicService);
  countrys$ = this.olympicService.getOlympicCountrysNumber();
  games$ = this.olympicService.getOlympicGamesNumber();


  ngOnInit(): void {
  }


  protected readonly async = async;
}
