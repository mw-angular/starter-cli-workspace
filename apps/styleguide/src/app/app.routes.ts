/* tslint:disable */
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'icons',
    pathMatch: 'full',
  },
  {
    path: 'icons',
    loadChildren: () => import('./pages/icons-page/icons-page.module').then((m) => m.IconsPageModule),
  },
  {
    path: 'colors',
    loadChildren: () => import('./pages/colors-page/colors-page.module').then((m) => m.ColorsPageModule),
  },
  {
    path: 'buttons',
    loadChildren: () => import('./pages/buttons-page/buttons-page.module').then((m) => m.ButtonsPageModule),
  },
  {
    path: '**',
    redirectTo: 'icons',
  },
];
