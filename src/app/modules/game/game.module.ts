import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './components/board/board.component';
import { InputComponent } from './components/input/input.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './game.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { GameComponent } from './pages/game/game.component';
import { WinComponent } from './pages/win/win.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
  declarations: [BoardComponent, GameComponent, InputComponent, WinComponent],
  exports: [GameComponent],
})
export class GameModule {}
