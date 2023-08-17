import { Injectable } from '@angular/core';
import { Category } from '@core/interfaces/Category';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import categoryJson from '../mocks/categories.json';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _categories = new BehaviorSubject<Category[]>([]);

  constructor() {
    timer(1000).subscribe(() => {
      this._categories.next(categoryJson);
    });
  }

  get categories(): Observable<Category[]> {
    return this._categories.asObservable();
  }
}
