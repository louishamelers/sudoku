import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, tap } from 'rxjs';
import { GameService } from '../services/game.service';
import { setValue, startNewGame } from './game.actions';
import { selectActiveFieldCell, selectGameBoard, selectGameData } from './game.selectors';

@Injectable()
export class GameEffects {
  setValue$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setValue),
        concatLatestFrom(() => [this.store.select(selectGameBoard), this.store.select(selectActiveFieldCell)]),
        tap(([{ value }, board, activeCell]) => this.gameService.setValue(value, board, activeCell)),
      ),
    { dispatch: false },
  );
  startNewGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(startNewGame),
        tap(({ difficulty }) => this.gameService.startNewGame(difficulty)),
      ),
    { dispatch: false },
  );

  constructor(private store: Store, private actions$: Actions, private gameService: GameService) {}
}
