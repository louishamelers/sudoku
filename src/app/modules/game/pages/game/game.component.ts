import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, filter, interval, map, Subject, takeUntil, tap, withLatestFrom } from 'rxjs';
import { addSecond } from 'src/app/core/state/game/game.actions';
import { selectErrors, selectGameDate, selectGameDifficulty, selectGameTime, selectGameTitle } from 'src/app/core/state/game/game.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnDestroy, OnInit {
  gameTitle$ = combineLatest([this.store.select(selectGameDifficulty), this.store.select(selectGameTitle)]).pipe(
    map(([difficulty, title]) => title ?? difficulty),
  );
  gameDate$ = this.store.select(selectGameDate).pipe(
    withLatestFrom(this.gameTitle$),
    filter(([, title]) => title?.toLowerCase() === 'daily sudoku'),
    map(([date]) => date),
  );
  mistakes$ = this.store.select(selectErrors).pipe(map((mistakes) => ({ value: mistakes })));
  time$ = this.store.select(selectGameTime).pipe(map((gameTime) => ({ value: gameTime })));
  destroy$ = new Subject<void>();

  maxMistakes = environment.maxErrors;

  constructor(private store: Store) {}

  ngOnInit(): void {
    interval(1000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.store.dispatch(addSecond()));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
