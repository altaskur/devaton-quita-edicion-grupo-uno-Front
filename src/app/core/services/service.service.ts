import { Injectable } from '@angular/core';
import { Service } from '@core/interfaces/Service';
import { Observable, BehaviorSubject, timer } from 'rxjs';

import servicesJson from '../mocks/services.json';
import commentsJson from '../mocks/comments.json';
import tagsJson from '../mocks/tags.json';
import categoryJson from '../mocks/categories.json';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private _services$ = new BehaviorSubject<Service[]>([]);

  constructor() {}

  get services(): Observable<Service[]> {
    return this._services$.asObservable();
  }

  loadServices(filters?: { term?: string }) {
    const SERVICES: Service[] = servicesJson
      .filter(item => {
        if (!filters) return true;
        return item.title.toLocaleLowerCase().includes(filters.term ?? '');
      })
      .map(item => {
        const COMMENTS = commentsJson.filter(i => i.service_id == item.id);
        const RATTINGS = COMMENTS.length
          ? COMMENTS.map(i => i.rating).reduce((a, b) => a + b) /
            COMMENTS.length
          : 0;

        const TAGS = tagsJson.filter(i => item.tags_id.includes(i.id));
        const CATEGORY = categoryJson.find(i => i.id == item.category_id)!;

        return {
          ...item,
          rating: RATTINGS,
          comments: COMMENTS,
          category: CATEGORY,
          tags: TAGS,
          commentsCount: COMMENTS.length,
        };
      });

    timer(2000).subscribe(() => {
      this._services$.next(SERVICES);
    });
  }
}
