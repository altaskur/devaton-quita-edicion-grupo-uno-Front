import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/home/home.component').then(
        component => component.HomeComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@pages/login/login.component').then(
        component => component.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@pages/register/register.component').then(
        component => component.RegisterComponent
      ),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('@pages/forgot-password/forgot-password.component').then(
        component => component.ForgotPasswordComponent
      ),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('@pages/search/search.component').then(
        component => component.SearchComponent
      ),
  },
];
