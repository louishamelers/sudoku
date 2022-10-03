import { createReducer, on } from '@ngrx/store';
import { Board, Cell } from 'src/app/shared/models/board.model';
import { Difficulty } from 'src/app/shared/models/difficulty.model';
import { loadNewGame, setActiveCell, setBoard } from './game.actions';

export interface GameState {
  difficulty: Difficulty | null;
  board: Board | null;
  activeCell: Cell | null;
}

const initialState: GameState = {
  difficulty: null,
  board: null,
  activeCell: null,
};

export const gameReducer = createReducer<GameState>(
  initialState,
  on(loadNewGame, (_state, { board, difficulty }) => ({ board, difficulty, activeCell: null })),
  on(setActiveCell, (state, { cell }) => ({ ...state, activeCell: cell })),
  on(setBoard, (state, { board }) => ({ ...state, board })),
);
