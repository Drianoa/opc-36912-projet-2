import { Component, inject, Input, OnInit } from '@angular/core';
import { OlympicService } from '../../core/services/olympic.service';

@Component({
  selector: 'app-contry-detail',
  imports: [],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {
  // contryId FRom router
  @Input() countryId: string = '';
  private olympicService = inject(OlympicService)

  ngOnInit(): void {
    this.olympicService.getOlympicByName(this.countryId)
  }


}
