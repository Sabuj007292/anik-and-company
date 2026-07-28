import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home.component')
            .then(m => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./features/about/about.component')
            .then(m => m.AboutComponent)
      },
      {
        path: 'services',
        loadComponent: () =>
          import('./features/services/services.component')
            .then(m => m.ServicesComponent)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./features/projects/projects.component')
            .then(m => m.ProjectsComponent)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./features/contact/contact.component')
            .then(m => m.ContactComponent)
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./features/login/login.component')
            .then(m => m.LoginComponent)
      },
      {
        path: 'solar',
        loadComponent: () =>
          import('./features/solar page/solar/solar.component')
            .then(m => m.SolarComponent)
      },
      {
        path: 'solar/on_grid_solar',
        loadComponent: () =>
          import('./features/solar page/on_grid_solar/on_grid_solar.component')
            .then(m => m.On_grid_solarComponent)
      }
    ]
  }
];
