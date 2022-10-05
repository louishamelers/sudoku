import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { GameComponent } from './game.component';
import { InputComponent } from './input/input.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './game.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorComponent } from './error/error.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [BoardComponent, GameComponent, InputComponent, ErrorComponent],
  exports: [GameComponent],
})
export class GameModule {}
