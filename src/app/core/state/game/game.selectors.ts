import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Board, FieldCell } from 'src/app/shared/models/board.model';
import { Game } from 'src/app/shared/models/game.model';

export const selectGameState = createFeatureSelector<Game>('gameState');
export const selectGameBoard = createSelector(selectGameState, (gameState: Game) => gameState.board);
export const selectGameActiveCell = createSelector(selectGameState, (gameState) => gameState.activeCell);
export const selectGameDifficulty = createSelector(selectGameState, (gameState) => gameState.difficulty);
export const selectGameDate = createSelector(selectGameState, (gameState) => gameState.date);
export const selectGameTitle = createSelector(selectGameState, (gameState) => gameState.title);
export const selectErrors = createSelector(selectGameState, (gameState) => gameState.errors);
export const selectGameTime = createSelector(selectGameState, (gameState) => gameState.timeInSeconds);

export const selectActiveFieldCell = createSelector(selectGameBoard, selectGameActiveCell, (board, activeCell): FieldCell | null =>
  board && activeCell && activeCell.row !== null && activeCell.col !== null ? { ...board[activeCell.row][activeCell.col], ...activeCell } : null,
);
export const selectActiveGameState = createSelector(selectGameBoard, selectActiveFieldCell, (board, activeFieldCell) => ({
  board,
  activeFieldCell,
}));
export const selectUsedNumbers = createSelector(selectGameBoard, (board) => {
  const usedNumbers = Array(9).fill(0);
  board?.forEach((col) =>
    col.forEach((field) => {
      if (field.value !== undefined && field.value === field.answer) usedNumbers[field.value - 1] += 1;
    }),
  );
  return usedNumbers;
});
