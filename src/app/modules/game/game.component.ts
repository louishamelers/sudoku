import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { startNewGame } from 'src/app/core/state/game/game.actions';

@Component({
  selector: 'app-game',
  template: '<app-board></app-board><app-input></app-input>',
})
export class GameComponent {
  constructor(private store: Store) {
    this.store.dispatch(startNewGame({ difficulty: 'easy' }));
  }
}
