import { Board, Cell } from './board.model';
import { Difficulty } from './difficulty.model';

export interface GameData {
  title?: string | null;
  difficulty: Difficulty | null;
  board: Board | null;
  date: Date | null;
}

export interface GameState {
  activeCell: Cell | null;
  errors: number;
  timeInSeconds: number;
}

export interface Game extends GameData, GameState {}
