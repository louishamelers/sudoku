import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockIndexPipe } from './pipes/block-index.pipe';
import { GameTimePipe } from './pipes/game-time.pipe';

@NgModule({
  declarations: [BlockIndexPipe, GameTimePipe],
  exports: [BlockIndexPipe, GameTimePipe],
  imports: [CommonModule],
})
export class SharedModule {}
