import { Component } from '@angular/core';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-game',
  template: '<app-board></app-board><app-input></app-input>',
})
export class GameComponent {
  constructor(private gameService: GameService) {
    this.gameService.startNewGame('expert');
  }
}
