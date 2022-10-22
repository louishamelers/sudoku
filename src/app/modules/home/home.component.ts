import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DailyService } from 'src/app/core/services/daily/daily.service';
import { startNewGame } from 'src/app/core/state/game/game.actions';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private store: Store, public dailyService: DailyService) {}

  onNewGameClick(difficulty: Difficulty) {
    this.store.dispatch(startNewGame({ difficulty }));
  }
}
