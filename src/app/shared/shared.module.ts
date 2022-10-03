import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockIndexPipe } from './pipes/block-index.pipe';

@NgModule({
  declarations: [BlockIndexPipe],
  exports: [BlockIndexPipe],
  imports: [CommonModule],
})
export class SharedModule {}
