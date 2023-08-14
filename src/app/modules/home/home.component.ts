import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { DailyService } from 'src/app/core/services/daily/daily.service';
import { GameService } from 'src/app/core/services/game/game.service';
import { loadGame, loadNewGame, startDailyGame, startNewGame } from 'src/app/core/state/game/game.actions';
import { Game, GameData } from 'src/app/shared/models/game.model';
import { isNotNullOrUndefined } from 'src/app/shared/util/filter-typeguard';
import { environment } from 'src/environments/environment';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  dailyGame$?: Observable<any>;

  maxMistakes = environment.maxErrors;

  constructor(private store: Store, public dailyService: DailyService, private gameService: GameService) {}

  ngOnInit(): void {
    this.dailyGame$ = this.dailyService.dailyGameData$.pipe(
      filter(isNotNullOrUndefined),
      map((game) => {
        const key = game?.date?.getTime().toString();
        const savedGame = this.gameService.loadGame(key);

        if (savedGame) return { ...savedGame, saved: true };
        return { ...game, errors: 0 };
      }),
    );
  }

  playGame(game: Game): void {
    const safeGame: Game = {
      ...game,
      timeInSeconds: game.timeInSeconds ?? 0,
      activeCell: null,
    };
    this.store.dispatch(loadGame({ game: safeGame }));
  }

  onNewGameClick(difficulty: Difficulty): void {
    this.store.dispatch(startNewGame({ difficulty }));
  }
}
