import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { startNewGame } from 'src/app/core/state/game/game.actions';
import { Difficulty } from 'src/app/shared/models/difficulty.model';

@Component({
  selector: 'app-difficulty-picker',
  templateUrl: './difficulty-picker.component.html',
  styleUrls: ['./difficulty-picker.component.scss'],
})
export class DifficultyPickerComponent {
  constructor(private store: Store) {}

  onNewGameClick(difficulty: Difficulty) {
    this.store.dispatch(startNewGame({ difficulty }));
  }
}
