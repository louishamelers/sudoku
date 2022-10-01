import { createReducer, on } from '@ngrx/store';
import { Board, Cell } from 'src/app/shared/models/board.model';
import { Difficulty } from 'src/app/shared/models/difficulty.model';
import { setActiveCell, setBoard, setGameState } from './game.actions';

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
  on(setGameState, (_state, { gameState }) => gameState),
  on(setActiveCell, (state, { cell }) => ({ ...state, activeCell: cell })),
  on(setBoard, (state, { board }) => ({ ...state, board })),
);
