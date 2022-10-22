import { Injectable } from '@angular/core';
import { getSudoku } from 'sudoku-gen';

import { environment } from 'src/environments/environment';
import { Board, FieldCell } from 'src/app/shared/models/board.model';
import { Difficulty } from 'src/app/shared/models/difficulty.model';
import { GameData } from 'src/app/shared/models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  setCellValue(value: number, board: Board | null, activeFieldCell: FieldCell | null): Board | null {
    if (!board || !activeFieldCell || activeFieldCell.readonly) return board;

    return board.map((row, rowIndex) =>
      row.map((field, colIndex) => (rowIndex === activeFieldCell.row && colIndex === activeFieldCell.col ? { ...field, value } : field)),
    );
  }

  clearCellValue(board: Board | null, activeFieldCell: FieldCell | null): Board | null {
    if (!board || !activeFieldCell || activeFieldCell.readonly) return board;

    return board.map((row, rowIndex) =>
      row.map((field, colIndex) => (rowIndex === activeFieldCell.row && colIndex === activeFieldCell.col ? { ...field, value: undefined } : field)),
    );
  }

  generateGameData(difficulty?: Difficulty): GameData {
    const board: Board = [...Array(environment.puzzleSize)].map(() => Array(environment.puzzleSize));

    const sudokuGen = getSudoku(difficulty);
    const difficultyGen = sudokuGen.difficulty;

    const rawPuzzle = Array.from(sudokuGen.puzzle);
    const rawSolution = Array.from(sudokuGen.solution);

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

    return {
      difficulty: difficultyGen,
      board,
    };
  }

  isComplete(board: Board | null): boolean {
    return board ? !board?.some((row) => row.some((field) => field.value !== field.answer)) : false;
  }
}
