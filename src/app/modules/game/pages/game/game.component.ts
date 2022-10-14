import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, map, Subject, takeUntil } from 'rxjs';
import { addSecond } from 'src/app/core/state/game/game.actions';
import { selectErrors, selectGameDifficulty, selectGameTime } from 'src/app/core/state/game/game.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnDestroy, OnInit {
  gameDifficulty$ = this.store.select(selectGameDifficulty);
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
