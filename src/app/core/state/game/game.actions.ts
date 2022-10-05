import { createAction, props } from '@ngrx/store';
import { Cell, Board } from 'src/app/shared/models/board.model';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

export const setBoard = createAction('[GAME - app] set board', props<{ board: Board | null }>());
export const gameComplete = createAction('[GAME - app] game complete');
export const loadNewGame = createAction('[GAME - app] load new game', props<{ difficulty: Difficulty; board: Board }>());
export const detectedIncorrectAnswer = createAction('[GAME - app] detected incorrect answer');

export const setActiveCell = createAction('[GAME - user] set active cell', props<{ cell: Cell | null }>());
export const setValue = createAction('[GAME - user] set value', props<{ value: number }>());
export const clearValue = createAction('[GAME - user] Clear value');
export const startNewGame = createAction('[GAME - user] start new game', props<{ difficulty: Difficulty }>());
