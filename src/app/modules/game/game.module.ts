import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { InputComponent } from './components/input/input.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './game.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorComponent } from './components/error/error.component';
import { GameComponent } from './pages/game/game.component';
import { WinComponent } from './pages/win/win.component';
import { LoseComponent } from './pages/lose/lose.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [BoardComponent, GameComponent, InputComponent, ErrorComponent, WinComponent, LoseComponent],
  exports: [GameComponent],
})
export class GameModule {}
