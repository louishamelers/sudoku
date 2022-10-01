import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GameData, FieldCell } from 'src/app/shared/models/game.model';

export const selectGameData = createFeatureSelector<GameData>('gameData');

export const selectGameBoard = createSelector(selectGameData, (gameData) => gameData.board);

export const selectActiveFieldCell = createSelector(selectGameData, ({ board, activeCell }): FieldCell | null =>
  board && activeCell && activeCell.row !== null && activeCell.col !== null ? { ...board[activeCell.row][activeCell.col], ...activeCell } : null,
);

export const selectActiveGameState = createSelector(selectGameBoard, selectActiveFieldCell, (board, activeFieldCell) => ({
  board,
  activeFieldCell,
}));
