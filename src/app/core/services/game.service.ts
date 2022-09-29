import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, Subject } from 'rxjs';
import { Sudoku } from 'src/app/shared/models/sudoku.model';
import { Sudoku as RawSudoku } from 'sudoku-gen/dist/types/sudoku.type';
import { getSudoku } from 'sudoku-gen';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private currentRawPuzzle$ = new ReplaySubject<RawSudoku>();
  currentPuzzle$ = new Observable<Sudoku | undefined>();

  constructor() {
    this.handleOnGeneratePuzzle();
  }

  startNewGame(difficulty: Difficulty): void {
    this.currentRawPuzzle$.next(getSudoku(difficulty));
  }

  private handleOnGeneratePuzzle(): void {
    this.currentPuzzle$ = this.currentRawPuzzle$.pipe(
      map((rawSudoku: RawSudoku) => {
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

        return sudoku;
      }),
    );
  }
}
