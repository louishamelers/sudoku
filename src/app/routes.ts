import { Routes } from '@angular/router';
import { GameComponent } from './modules/game/game.component';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    // redirectTo: 'game',
    // pathMatch: 'full',
  },
  {
    path: 'game',
    loadChildren: () => import('./modules/game/game.module').then((m) => m.GameModule),
  },
];
