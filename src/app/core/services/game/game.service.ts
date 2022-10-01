import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, Subject, tap, withLatestFrom } from 'rxjs';
import { Sudoku as RawSudoku } from 'sudoku-gen/dist/types/sudoku.type';
import { getSudoku } from 'sudoku-gen';

import { environment } from 'src/environments/environment';
import { Board, Cell, Difficulty, Field, FieldCell, GameData } from 'src/app/shared/models/game.model';
import { Store } from '@ngrx/store';
import { setActiveCell, setBoard, setGameData } from '../../state/game/game.actions';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private store: Store) {}

  setCellValue(value: number, board: Board | null, activeFieldCell: FieldCell | null): void {
    if (!board || !activeFieldCell || activeFieldCell.readonly) return;

    this.store.dispatch(
      setBoard({
        board: board.map((row, rowIndex) =>
          row.map((field, colIndex) => (rowIndex === activeFieldCell.row && colIndex === activeFieldCell.col ? { ...field, value } : field)),
        ),
      }),
    );
  }

  startNewGame(difficulty: Difficulty): void {
    const board: Board = [...Array(environment.puzzleSize)].map(() => Array(environment.puzzleSize));

    const rawSudoku = getSudoku(difficulty);
    const rawPuzzle = Array.from(rawSudoku.puzzle);
    const rawSolution = Array.from(rawSudoku.solution);

    rawPuzzle.forEach((rawValue, index) => {
      // '~~' is faster than Math.floor()
      const row = ~~(index / environment.puzzleSize);
      const column = index % environment.puzzleSize;

      const value: number | undefined = rawValue !== '-' ? Number(rawValue) : undefined;
      const answer: number | undefined = rawSolution[index] !== '-' ? Number(rawSolution[index]) : undefined;

      board[row][column] = {
        value,
        answer,
        readonly: !!value,
      };
    });

    this.store.dispatch(
      setGameData({
        gameData: {
          board,
          difficulty,
          activeCell: null,
        },
      }),
    );
  }
}
