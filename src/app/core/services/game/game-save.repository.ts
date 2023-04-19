import { Injectable } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { initialState } from '../../state/game/game.reducer';

@Injectable({
  providedIn: 'root',
})
export class GameSaveRepository {
  saveGame(game: Game): void {
    if (game === initialState || !game.date) return;

    const key = game.date.getTime().toString();

    localStorage.setItem(key, JSON.stringify(game));
    localStorage.setItem('last-game', key);
  }

  loadGame(key: string): Game | undefined {
    const stringifiedGame = localStorage.getItem(key);
    if (!stringifiedGame) return undefined;

    const game = JSON.parse(stringifiedGame);

    return {
      ...game,
      date: new Date(game.date),
    };
  }
}
