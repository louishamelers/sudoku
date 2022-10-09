import { Routes } from '@angular/router';
import { GameComponent } from './pages/game/game.component';
import { LoseComponent } from './pages/lose/lose.component';
import { WinComponent } from './pages/win/win.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: GameComponent,
  },
  {
    path: 'winner',
    component: WinComponent,
  },
  {
    path: 'loser',
    component: LoseComponent,
  },
];
