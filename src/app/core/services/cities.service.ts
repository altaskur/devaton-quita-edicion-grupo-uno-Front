import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer } from 'rxjs';

import { City } from '@core/interfaces/City';
import citiesJson from '../mocks/cities.json';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private _cities = new BehaviorSubject<City[]>([]);

  constructor() {
    timer(1000).subscribe(() => {
      this._cities.next(citiesJson);
    });
  }

  get cities(): Observable<City[]> {
    return this._cities.asObservable();
  }
}
