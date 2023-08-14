import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockIndexPipe } from './pipes/block-index.pipe';
import { GameTimePipe } from './pipes/game-time.pipe';
import { GameCompleteComponent } from './ui/game-complete/game-complete.component';
import { GameCompletePipe } from './pipes/game-complete.pipe';
import { GameContinueComponent } from './ui/game-continue/game-continue.component';
import { GameStartComponent } from './ui/game-start/game-start.component';

@NgModule({
  declarations: [BlockIndexPipe, GameTimePipe, GameCompletePipe, GameCompleteComponent, GameContinueComponent, GameStartComponent],
  exports: [BlockIndexPipe, GameTimePipe, GameCompletePipe, GameCompleteComponent, GameContinueComponent, GameStartComponent],
  imports: [CommonModule],
})
export class SharedModule {}
