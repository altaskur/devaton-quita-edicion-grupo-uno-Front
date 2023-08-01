import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('@pages/login/login.component').then(
        module => module.LoginComponent
      ),
  },
];
