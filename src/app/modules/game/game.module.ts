import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [BoardComponent],
  exports: [BoardComponent],
  imports: [CommonModule],
})
export class GameModule {}
