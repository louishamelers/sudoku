import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clearValue, setValue } from 'src/app/core/state/game/game.actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  inputValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private store: Store) {}

  onInputClick(input: number): void {
    this.store.dispatch(setValue({ value: input }));
  }

  onClearClick(): void {
    this.store.dispatch(clearValue());
  }
}
