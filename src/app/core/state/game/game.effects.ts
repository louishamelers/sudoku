import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { concat, filter, map, of, switchMap, switchMapTo, tap, withLatestFrom } from 'rxjs';
import { isNotNullOrUndefined } from 'src/app/shared/util/filter-typeguard';
import { DailyService } from '../../services/daily/daily.service';
import { GameService } from '../../services/game/game.service';
import {
  clearValue,
  detectedIncorrectAnswer,
  finishNow,
  gameWon,
  loadGame,
  loadNewGame,
  setBoard,
  setValue,
  startDailyGame,
  startNewGame,
} from './game.actions';
import { selectActiveFieldCell, selectErrors, selectGameBoard, selectGameState } from './game.selectors';

@Injectable()
export class GameEffects {
  onChange$ = createEffect(() => this.store.select(selectGameState).pipe(tap((gameState) => this.gameService.saveGame(gameState))), {
    dispatch: false,
  });
  onSetBoard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setBoard),
      concatLatestFrom(() => [this.store.select(selectGameBoard)]),

      switchMap(([, board]) => {
        if (board && this.gameService.isComplete(board)) return of(gameWon());
        return of();
      }),
    ),
  );
  setValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setValue),
      concatLatestFrom(() => [this.store.select(selectGameBoard), this.store.select(selectActiveFieldCell), this.store.select(selectErrors)]),
      switchMap(([{ value }, board, activeFieldCell, errors]) => {
        // TODO: remove errors
        const updatedBoard = this.gameService.setCellValue(value, board, activeFieldCell);
        const wrongAnswer = activeFieldCell && activeFieldCell?.answer !== value && activeFieldCell?.value !== value && !activeFieldCell.readonly;

        return concat([setBoard({ board: updatedBoard }), ...(wrongAnswer ? [detectedIncorrectAnswer()] : [])]);
      }),
    ),
  );
  clearValue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(clearValue),
      concatLatestFrom(() => [this.store.select(selectGameBoard), this.store.select(selectActiveFieldCell)]),
      switchMap(([{}, board, activeFieldCell]) => of(setBoard({ board: this.gameService.clearCellValue(board, activeFieldCell) }))),
    ),
  );
  startNewGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startNewGame),
      switchMap(({ difficulty }) => of(loadNewGame(this.gameService.generateGameData(difficulty)))),
    ),
  );
  startDailyGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(startDailyGame),
      switchMap(() => this.dailyService.dailyGameData$),
      filter(isNotNullOrUndefined),
      map((gameData) => loadNewGame(gameData)),
    ),
  );
  goToNewGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadNewGame, loadGame),
        tap(() => this.router.navigate(['/', 'game'])),
      ),
    { dispatch: false },
  );
  winGame$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(gameWon),
        tap(() => this.router.navigate(['/', 'game', 'winner'])),
      ),
    { dispatch: false },
  );
  finishNow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(finishNow),
      concatLatestFrom(() => this.store.select(selectGameBoard)),
      switchMap(([, board]) => {
        console.log('hai');
        const finishedGameBoard = this.gameService.finishGameNow(board);
        console.log(finishedGameBoard);
        return of(setBoard({ board: finishedGameBoard }));
      }),
    ),
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private gameService: GameService,
    private dailyService: DailyService,
    private router: Router,
  ) {}
}
