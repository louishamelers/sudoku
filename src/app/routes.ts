import { Routes } from '@angular/router';
import { GameComponent } from './modules/game/game.component';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
];
