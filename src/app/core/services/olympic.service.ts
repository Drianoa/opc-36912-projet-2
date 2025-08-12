import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Olympic } from '../models/Olympic';
import { DataItem, Series } from '@swimlane/ngx-charts/lib/models/chart-data.model';


/**
 * Service providing data about Olympic Games.
 *
 * The data is fetched from a local JSON file.
 */
@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private http = inject(HttpClient);

  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

  /**
   * Load initial data. Use to ensure the data is up to date.
   */
  loadInitialData(): Observable<Olympic[]> {
    return this.http.get<Olympic[]>(this.olympicUrl)
      .pipe(
        tap({
          next: data => this.olympics$.next(data),
          error: err => {
            console.error('Erreur lors du chargement des données', err);
            this.olympics$.next([]);
          }
        })
      );
  }


  getOlympics() {
    return this.olympics$.asObservable();
  }

  /**
   * Returns an observable of the list of Olympic countries.
   *
   * The list is loaded once and cached. If the data is not available, an empty list is returned.
   */
  getOlympicCountrysNumber() {
    return this.getOlympics().pipe(
      // Le nombre de pays est égale à la taille de la liste
      map((value) => value?.length)
    )
  }

  /**
   * Returns an observable of the number of Olympic games.
   */
  getOlympicGamesNumber() {
    return this.getOlympics().pipe(
      // Le nombre de jeux est égal au nombre d'années différentes de l'ensemble des pays
      map((value) =>
        new Set(value?.flatMap(country =>
          country.participations?.map(p => p.year) || [])
        ).size
      )
    )
  }

  /**
   * Returns an observable of the total number of medals for each Olympic country.
   *
   */
  getOlympicsPieData(): Observable<DataItem[] | undefined> {
    return this.getOlympics().pipe(
      // Le nombre de jeux est égale au nombre d'années différentes de chaque l'ensemble des pays
      map((value) =>
        value?.map((country) => ({
          name: country.country,
          value: country.participations.reduce((acc, participation) => acc + participation.medalsCount, 0)
        })))
    )
  }

  /**
   * Returns an observable of the Olympic country with the given name.
   */
  getOlympicByName(name: string): Observable<Olympic | undefined> {
    return this.getOlympics().pipe(
      map((list) => list?.find((c) => c.country === name)),
    )
  }

  /**
   * Returns an observable of the number of Olympic games for the country by name.
   * @param name
   */
  getNumberOfEntries(name: string): Observable<number> {
    return this.getOlympicByName(name).pipe(
      map((value) => value?.participations.length || 0)
    )
  }

  /**
   * Returns an observable of the total number of medals for the country by name.
   */
  getTotalNumberOfMedals(name: string): Observable<number> {
    return this.getOlympicByName(name).pipe(
      map((value) => value?.participations.reduce((acc, participation) => acc + participation.medalsCount, 0) || 0)
    )
  }

  /**
   * Returns an observable of the total number of athletes for the country by name.
   */
  getTotalNumberOfAthletes(name: string): Observable<number> {
    return this.getOlympicByName(name).pipe(
      map((value) => value?.participations.reduce((acc, participation) => acc + participation.athleteCount, 0) || 0)
    )
  }

  /**
   * Returns the country data in a format that can be used by the chart.
   *
   * @param olympic
   */
  mapToChartData(olympic: Olympic): Series {
    return {
      name: olympic.country,
      series: olympic.participations.map(participation => ({
        name: participation.year.toString(),
        value: participation.medalsCount
      }))
    };
  }
}
