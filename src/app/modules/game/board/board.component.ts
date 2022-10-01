import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameService } from 'src/app/core/services/game.service';
import { selectActiveGameState, selectGameBoard, selectGameData } from 'src/app/core/state/game.selectors';
import { Cell } from 'src/app/shared/models/game.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  gameData$ = this.store.select(selectActiveGameState);

  constructor(private store: Store, private gameService: GameService) {}

  ngOnInit(): void {}

  onFieldClick(cell: Cell): void {
    this.gameService.setActiveField(cell);
  }
}
