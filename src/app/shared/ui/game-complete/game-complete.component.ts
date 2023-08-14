import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { loadGame } from 'src/app/core/state/game/game.actions';

@Component({
  selector: 'app-game-complete',
  templateUrl: './game-complete.component.html',
  styleUrls: ['./game-complete.component.scss'],
})
export class GameCompleteComponent {
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
