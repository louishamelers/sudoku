import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { startNewGame } from 'src/app/core/state/game/game.actions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private store: Store) {}
}
