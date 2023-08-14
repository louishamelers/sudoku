import { Component, Input } from '@angular/core';
import { Game } from '../../models/game.model';
import { Store } from '@ngrx/store';
import { loadGame } from 'src/app/core/state/game/game.actions';

@Component({
  selector: 'app-game-start',
  templateUrl: './game-start.component.html',
  styleUrls: ['./game-start.component.scss'],
})
export class GameStartComponent {
  @Input() game!: Game;

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
