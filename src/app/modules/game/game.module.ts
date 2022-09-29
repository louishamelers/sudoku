import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle/puzzle.component';

@NgModule({
  declarations: [PuzzleComponent],
  exports: [PuzzleComponent],
  imports: [CommonModule],
})
export class GameModule {}
