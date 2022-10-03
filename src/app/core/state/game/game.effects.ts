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
      switchMap(([{ value }, board, activeFieldCell]) => of(setBoard({ board: this.boardService.setCellValue(value, board, activeFieldCell) }))),
    ),
  );
  startNewGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startNewGame),
      switchMap(({ difficulty }) =>
        of(
          loadNewGame({
            difficulty,
            board: this.boardService.startNewGame(difficulty),
          }),
        ),
      ),
    ),
  );

  constructor(private store: Store, private actions$: Actions, private boardService: BoardService) {}
}
