import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, Subject, tap, withLatestFrom } from 'rxjs';
import { Sudoku, SudokuField } from 'src/app/shared/models/sudoku.model';
import { Sudoku as RawSudoku } from 'sudoku-gen/dist/types/sudoku.type';
import { getSudoku } from 'sudoku-gen';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private puzzleSubject$ = new ReplaySubject<Sudoku | undefined>();
  private activeFieldSubject$ = new ReplaySubject<SudokuField | undefined>();

  public puzzle$ = this.puzzleSubject$.asObservable();
  public activeCell$ = this.activeFieldSubject$.pipe(
    withLatestFrom(this.puzzleSubject$),
    map(([activeField, sudoku]) => {
      const row = activeField ? sudoku?.findIndex((row) => row.indexOf(activeField) !== -1) : undefined;
      const col = activeField && row ? sudoku?.[row].indexOf(activeField) : undefined;

      return { row, col, value: activeField?.value };
    }),
  );

  setActiveField(field: SudokuField): void {
    this.activeFieldSubject$.next(field);
  }

  startNewGame(difficulty: Difficulty): void {
    const rawSudoku = getSudoku(difficulty);

    const sudoku: Sudoku = [...Array(environment.puzzleSize)].map(() => Array(environment.puzzleSize));

    const rawPuzzle = Array.from(rawSudoku.puzzle);
    const rawSolution = Array.from(rawSudoku.solution);

    rawPuzzle.forEach((rawValue, index) => {
      // '~~' is faster than Math.floor()
      const row = ~~(index / environment.puzzleSize);
      const column = index % environment.puzzleSize;

      const value: number | undefined = rawValue !== '-' ? Number(rawValue) : undefined;
      const answer: number | undefined = rawSolution[index] !== '-' ? Number(rawSolution[index]) : undefined;

      sudoku[row][column] = {
        value,
        answer,
        readonly: !!value,
      };
    });

    this.puzzleSubject$.next(sudoku);
  }
}
