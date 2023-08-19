import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  timer,
  tap,
  map,
  from,
  merge,
} from 'rxjs';
import { Service } from '@core/interfaces/Service';
import { Contract } from '@core/interfaces/Contract';

import servicesJson from '../mocks/services.json';
import commentsJson from '../mocks/comments.json';
import tagsJson from '../mocks/tags.json';
import categoryJson from '../mocks/categories.json';
import contractsJson from '../mocks/contracts.json';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private _services$ = new BehaviorSubject<Service[] | null>(null);
  private _contracts$ = new BehaviorSubject<Contract[] | null>(null);

  static IN_PROGRESS = 1;

  static FINISHED = 2;

  static CANCELED = 3;

  constructor() {}

  get services(): Observable<Service[] | null> {
    return this._services$.asObservable();
  }

  loadServices(filters?: { term?: string }) {
    const SERVICES: Service[] = servicesJson
      .filter(item => {
        if (!filters) return true;
        return item.title.toLocaleLowerCase().includes(filters.term ?? '');
      })
      .map(item => this.getServiceById(item.id));

    timer(2000).subscribe(() => {
      this._services$.next(SERVICES);
    });
  }

  getServiceById(id: number): Service {
    let service = servicesJson.find(s => s.id == id) as Service;
    const COMMENTS = commentsJson.filter(i => i.service_id == service.id);
    const RATTINGS = COMMENTS.length
      ? COMMENTS.map(i => i.rating).reduce((a, b) => a + b) / COMMENTS.length
      : 0;

    const TAGS = tagsJson.filter(i => service.tags_id.includes(i.id));
    const CATEGORY = categoryJson.find(i => i.id == service.category_id)!;

    return {
      ...service,
      rating: RATTINGS,
      comments: COMMENTS,
      category: CATEGORY,
      tags: TAGS,
      commentsCount: COMMENTS.length,
    };
  }

  loadContracts() {
    timer(2000).subscribe(() => {
      const CONTRACTS = contractsJson.map(item => {
        return {
          ...item,
          service: this.getServiceById(item.id),
          isInProgress: ServiceService.IN_PROGRESS == item.id,
          isFinished: ServiceService.FINISHED == item.id,
          isCanceled: ServiceService.CANCELED == item.id,
        };
      });

      return this._contracts$.next(CONTRACTS);
    });
  }

  get contracts(): Observable<Contract[] | null> {
    return this._contracts$.asObservable();
  }
}
