import { Routes } from '@angular/router';
import { BoardComponent } from './modules/game/board/board.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'game',
    pathMatch: 'full',
  },
  {
    path: 'game',
    component: BoardComponent,
  },
];
