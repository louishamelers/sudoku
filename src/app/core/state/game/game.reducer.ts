import { createReducer, on } from '@ngrx/store';
import { Game } from 'src/app/shared/models/game.model';
import { addSecond, detectedIncorrectAnswer, loadNewGame, setActiveCell, setBoard } from './game.actions';

const initialState: Game = {
  difficulty: null,
  board: null,
  date: null,
  activeCell: null,
  errors: 0,
  timeInSeconds: 0,
};

export const gameReducer = createReducer<Game>(
  initialState,
  on(loadNewGame, (_state, { board, difficulty, date, title }) => ({
    board,
    difficulty,
    date,
    title,
    activeCell: null,
    errors: 0,
    timeInSeconds: 0,
  })),
  on(setActiveCell, (state, { cell }) => ({ ...state, activeCell: cell })),
  on(setBoard, (state, { board }) => ({ ...state, board })),
  on(detectedIncorrectAnswer, (state, {}) => ({ ...state, errors: state.errors + 1 })),
  on(addSecond, (state, {}) => ({ ...state, timeInSeconds: state.timeInSeconds + 1 })),
);
