import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'blockIndex' })
export class BlockIndexPipe implements PipeTransform {
  transform(value?: number): number {
    return value !== null && value !== undefined ? ~~(value / 3) : -1;
  }
}
