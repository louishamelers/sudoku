import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(private gameService: GameService, private store: Store) {}

  onInputClick(input: number): void {
    this.gameService.startNewGame('expert');
  }
}
