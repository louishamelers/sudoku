import { Difficulty as ExtDifficulty } from 'sudoku-gen/dist/types/difficulty.type';

export declare type Difficulty = ExtDifficulty;

export interface GameData {
  difficulty: Difficulty | null;
  board: Board | null;
  activeCell: Cell | null;
}

export interface Field {
  value?: number;
  answer?: number;
  readonly: boolean;
}

export type Board = Field[][];

export interface Cell {
  col: number;
  row: number;
}

export interface FieldCell extends Field, Cell {}
