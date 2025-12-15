import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'blockIndex',
    standalone: false
})
export class BlockIndexPipe implements PipeTransform {
  transform(value?: number): number {
    return value !== null && value !== undefined ? ~~(value / 3) : -1;
  }
}
