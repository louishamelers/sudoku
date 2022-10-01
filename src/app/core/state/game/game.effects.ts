import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { BoardService } from '../../services/game/game.service';
import { setValue, startNewGame } from './game.actions';
import { selectActiveFieldCell, selectGameBoard } from './game.selectors';

@Injectable()
export class GameEffects {
  setValue$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setValue),
        concatLatestFrom(() => [this.store.select(selectGameBoard), this.store.select(selectActiveFieldCell)]),
        tap(([{ value }, board, activeCell]) => this.gameService.setCellValue(value, board, activeCell)),
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

  constructor(private store: Store, private actions$: Actions, private gameService: BoardService) {}
}
