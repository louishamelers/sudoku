import { state } from '@angular/animations';
import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Board, Cell, Difficulty, Field, FieldCell, GameData } from 'src/app/shared/models/game.model';
import { setActiveCell, setBoard, setGameData } from './game.actions';

const initialState: GameData = {
  difficulty: null,
  board: null,
  activeCell: null,
};

export const gameReducer = createReducer<GameData>(
  initialState,
  on(setGameData, (_state, { gameData }) => gameData),
  on(setActiveCell, (state, { cell }) => ({ ...state, activeCell: cell })),
  on(setBoard, (state, { board }) => ({ ...state, board })),
);
