export type Sudoku = SudokuField[][];

export interface SudokuField {
  value?: number;
  answer?: number;
  readonly: boolean;
}
