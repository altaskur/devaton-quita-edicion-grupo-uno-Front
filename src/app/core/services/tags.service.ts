import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, timer } from 'rxjs';

import { Tag } from '@core/interfaces/Tag';
import tagJson from '../mocks/tags.json';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private _tags = new BehaviorSubject<Tag[]>([]);

  constructor() {
    timer(1000).subscribe(() => {
      this._tags.next(tagJson);
    });
  }

  get tags(): Observable<Tag[]> {
    return this._tags.asObservable();
  }
}
