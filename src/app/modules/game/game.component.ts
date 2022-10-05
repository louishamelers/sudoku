import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { startNewGame } from 'src/app/core/state/game/game.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent {
  constructor(private store: Store) {
    this.store.dispatch(startNewGame({ difficulty: 'easy' }));
  }
}
