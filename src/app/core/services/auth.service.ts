import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _storage: StorageService) {}

  login() {
    this._storage.set('user', { name: 'John Doe' });
  }

  logout() {
    this._storage.remove('user');
  }

  getUserSignedIn() {
    return this._storage.get('user');
  }
}
