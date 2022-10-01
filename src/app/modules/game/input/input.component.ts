import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setValue } from 'src/app/core/state/game/game.actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(private store: Store) {}

  onInputClick(input: number): void {
    this.store.dispatch(setValue({ value: input }));
  }
}
