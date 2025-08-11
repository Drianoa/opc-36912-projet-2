import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Olympic } from '../models/Olympic';
import { DataItem, Series } from '@swimlane/ngx-charts/lib/models/chart-data.model';

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private http = inject(HttpClient);

  private olympicUrl = './assets/mock/olympic.json';
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

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

  getOlympicCountrysNumber() {
    return this.getOlympics().pipe(
      // Le nombre de pays est égale à la taille de la liste
      map((value) => value?.length)
    )
  }

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

  getOlympicByName(name: string): Observable<Olympic | undefined> {
    return this.getOlympics().pipe(
      map((list) => list?.find((c) => c.country === name)),
    )
  }

  getNumberOfEntries(name: string): Observable<number> {
    return this.getOlympicByName(name).pipe(
      map((value) => value?.participations.length || 0)
    )
  }

  getTotalNumberOfMedals(name: string): Observable<number> {
    return this.getOlympicByName(name).pipe(
      map((value) => value?.participations.reduce((acc, participation) => acc + participation.medalsCount, 0) || 0)
    )
  }

  getTotalNumberOfAthletes(name: string): Observable<number> {
    return this.getOlympicByName(name).pipe(
      map((value) => value?.participations.reduce((acc, participation) => acc + participation.athleteCount, 0) || 0)
    )
  }

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
