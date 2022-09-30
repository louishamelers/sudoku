import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game.component';
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BoardComponent, GameComponent, InputComponent],
  exports: [GameComponent],
})
export class GameModule {}
