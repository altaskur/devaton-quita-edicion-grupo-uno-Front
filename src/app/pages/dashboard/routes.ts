import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'my-services',
      },
      {
        path: 'my-services',
        loadComponent: () =>
          import('../my-services/my-services.component').then(
            c => c.MyServicesComponent
          ),
      },
      {
        path: 'my-services/create',
        loadComponent: () =>
          import('../create-service/create-service.component').then(
            c => c.CreateServiceComponent
          ),
      },
      {
        path: 'contracts',
        loadComponent: () =>
          import('../contracts/contracts.component').then(
            c => c.ContractsComponent
          ),
      },
    ],
  },
];
