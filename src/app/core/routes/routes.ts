import { Routes } from '@angular/router';

export const ROUTES: Routes = [
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
];
