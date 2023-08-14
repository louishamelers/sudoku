import { Pipe, PipeTransform } from '@angular/core';
import { Board } from '../models/board.model';
import { GameData } from '../models/game.model';

@Pipe({ name: 'gameComplete' })
export class GameCompletePipe implements PipeTransform {
  transform(board: Board | null): boolean {
    return board ? board.every((row) => row.every((column) => column.value === column.answer)) : false;
  }
}
