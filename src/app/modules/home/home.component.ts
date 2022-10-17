import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { startNewGame } from 'src/app/core/state/game/game.actions';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private store: Store) {}

  onNewGameClick(difficulty: Difficulty) {
    this.store.dispatch(startNewGame({ difficulty }));
  }
}
