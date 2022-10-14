import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gameTime' })
export class GameTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes = String(~~(value / 60));
    const seconds = String(value % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}
