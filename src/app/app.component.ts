import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NetworkService } from './core/services/network/network.service';
import { UpdateService } from './core/services/update/update.service';
import { startNewGame } from './core/state/game/game.actions';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'sudoku-app';

  constructor(_updateService: UpdateService, _networkService: NetworkService, store: Store) {
    store.dispatch(startNewGame({ difficulty: 'expert' }));
  }
}
