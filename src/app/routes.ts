import { Routes } from '@angular/router';
import { canActivateGameBoard } from './core/guards/no-game.guard';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'game',
    canActivate: [canActivateGameBoard],
    loadChildren: () => import('./modules/game/game.module').then((m) => m.GameModule),
  },
];
