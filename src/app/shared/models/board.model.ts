export interface Field {
  value?: number;
  answer?: number;
  readonly: boolean;
}

export interface Cell {
  col: number;
  row: number;
}

export interface FieldCell extends Field, Cell {}

export type Board = Field[][];
