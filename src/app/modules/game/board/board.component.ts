import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setActiveCell } from 'src/app/core/state/game/game.actions';
import { selectActiveGameState } from 'src/app/core/state/game/game.selectors';
import { Cell } from 'src/app/shared/models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  gameState$ = this.store.select(selectActiveGameState);

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onFieldClick(cell: Cell): void {
    this.store.dispatch(setActiveCell({ cell }));
  }
}
