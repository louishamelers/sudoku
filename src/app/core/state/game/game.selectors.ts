import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Board, FieldCell } from 'src/app/shared/models/board.model';
import { GameState } from './game.reducer';

export const selectGameState = createFeatureSelector<GameState>('gameState');
export const selectGameBoard = createSelector(selectGameState, (gameState: GameState) => gameState.board);
export const selectGameActiveCell = createSelector(selectGameState, (gameState) => gameState.activeCell);
export const selectGameDifficulty = createSelector(selectGameState, (gameState) => gameState.difficulty);

export const selectActiveFieldCell = createSelector(selectGameBoard, selectGameActiveCell, (board, activeCell): FieldCell | null =>
  board && activeCell && activeCell.row !== null && activeCell.col !== null ? { ...board[activeCell.row][activeCell.col], ...activeCell } : null,
);
export const selectActiveGameState = createSelector(selectGameBoard, selectActiveFieldCell, (board, activeFieldCell) => ({
  board,
  activeFieldCell,
}));