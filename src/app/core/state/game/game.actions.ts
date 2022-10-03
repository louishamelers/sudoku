import { createAction, props } from '@ngrx/store';
import { Cell, Board } from 'src/app/shared/models/board.model';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

export const setBoard = createAction('[GAME Service] set board', props<{ board: Board | null }>());

export const setActiveCell = createAction('[GAME Board] set active cell', props<{ cell: Cell | null }>());
export const setValue = createAction('[GAME Input] set value', props<{ value: number }>());
export const clearValue = createAction('[GAME Input] Clear value');

export const startNewGame = createAction('[GAME input] start new game', props<{ difficulty: Difficulty }>());
export const loadNewGame = createAction('[GAME result] load new game', props<{ difficulty: Difficulty; board: Board }>());
