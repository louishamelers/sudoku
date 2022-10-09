import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectErrors, selectGameDifficulty } from 'src/app/core/state/game/game.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  gameDifficulty$ = this.store.select(selectGameDifficulty);
  mistakes$ = this.store.select(selectErrors).pipe(map((mistakes) => ({ value: mistakes })));

  maxMistakes = environment.maxErrors;

  constructor(private store: Store) {
    this.mistakes$.subscribe(console.log);
  }
}
