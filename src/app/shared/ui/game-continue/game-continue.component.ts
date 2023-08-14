import { Component, Input } from '@angular/core';
import { Game } from '../../models/game.model';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { loadGame } from 'src/app/core/state/game/game.actions';

@Component({
  selector: 'app-game-continue',
  templateUrl: './game-continue.component.html',
  styleUrls: ['./game-continue.component.scss'],
})
export class GameContinueComponent {
  @Input() game!: Game;

  maxMistakes = environment.maxErrors;

  constructor(private store: Store) {}

  playGame(game: Game): void {
    const safeGame: Game = {
      ...game,
      timeInSeconds: game.timeInSeconds ?? 0,
      activeCell: null,
    };
    this.store.dispatch(loadGame({ game: safeGame }));
  }
}
