import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Olympic } from '../models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private http = inject(HttpClient);

  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[] | null | undefined>(undefined);

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next(null);
        return caught;
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }

  getOlympicCountrysNumber() {
    return this.loadInitialData().pipe(
      // Le nombre de pays est égale à la taille de la liste
      map((value) => value?.length)
    )
  }

  getOlympicGamesNumber() {
    return this.loadInitialData().pipe(
      // Le nombre de jeux est égale au nombre d'années différentes de chaque l'ensemble des pays
      map((value) => value?.map((country) => country.participations)
        .flat()
        .map((participation) => participation.year)
        .filter((year, index, array) => array.indexOf(year) === index)
        .length)
    )
  }
}
