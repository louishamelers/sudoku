import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { clearValue, setValue } from 'src/app/core/state/game/game.actions';
import { selectUsedNumbers } from 'src/app/core/state/game/game.selectors';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  usedNumbers$ = this.store.select(selectUsedNumbers).pipe(takeUntil(this.destroy$));

  inputValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private store: Store) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onInputClick(input: number): void {
    this.store.dispatch(setValue({ value: input }));
  }

  onClearClick(): void {
    this.store.dispatch(clearValue());
  }
}
