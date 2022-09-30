import { Routes } from '@angular/router';
import { GameComponent } from './modules/game/game.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  {
    path: 'game',
    component: GameComponent,
  },
];
