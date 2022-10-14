import { createReducer, on } from '@ngrx/store';
import { Board, Cell } from 'src/app/shared/models/board.model';
import { Difficulty } from 'src/app/shared/models/difficulty.model';
import { addSecond, detectedIncorrectAnswer, loadNewGame, setActiveCell, setBoard } from './game.actions';

export interface GameState {
  difficulty: Difficulty | null;
  board: Board | null;
  activeCell: Cell | null;
  errors: number;
  timeInSeconds: number;
}

const initialState: GameState = {
  difficulty: null,
  board: null,
  activeCell: null,
  errors: 0,
  timeInSeconds: 0,
};

export const gameReducer = createReducer<GameState>(
  initialState,
  on(loadNewGame, (_state, { board, difficulty }) => ({ board, difficulty, activeCell: null, errors: 0, timeInSeconds: 0 })),
  on(setActiveCell, (state, { cell }) => ({ ...state, activeCell: cell })),
  on(setBoard, (state, { board }) => ({ ...state, board })),
  on(detectedIncorrectAnswer, (state, {}) => ({ ...state, errors: state.errors + 1 })),
  on(addSecond, (state, {}) => ({ ...state, timeInSeconds: state.timeInSeconds + 1 })),
);
