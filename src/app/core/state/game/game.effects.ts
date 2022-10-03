import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of, switchMap, tap } from 'rxjs';
import { BoardService } from '../../services/board/board.service';
import { loadNewGame, setBoard, setValue, startNewGame } from './game.actions';
import { selectActiveFieldCell, selectGameBoard } from './game.selectors';

@Injectable()
export class GameEffects {
  setValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setValue),
      concatLatestFrom(() => [this.store.select(selectGameBoard), this.store.select(selectActiveFieldCell)]),
      switchMap(([{ value }, board, activeFieldCell]) => {
        const newBoard = this.boardService.setCellValue(value, board, activeFieldCell);
        return of(setBoard({ board: newBoard ?? null }));
      }),
    ),
  );
  startNewGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startNewGame),
      switchMap(({ difficulty }) => {
        const board = this.boardService.startNewGame(difficulty);
        return of(
          loadNewGame({
            difficulty,
            board,
          }),
        );
      }),
    ),
  );

  constructor(private store: Store, private actions$: Actions, private boardService: BoardService) {}
}
