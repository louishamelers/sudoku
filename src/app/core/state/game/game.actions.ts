import { createAction, props } from '@ngrx/store';
import { Cell, Board } from 'src/app/shared/models/board.model';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';
import { GameState } from './game.reducer';

export const setGameState = createAction('[GAME Service] set game data', props<{ gameState: GameState }>());
export const setBoard = createAction('[GAME Service] set board', props<{ board: Board }>());

export const setActiveCell = createAction('[GAME Board] set active cell', props<{ cell: Cell }>());
export const setValue = createAction('[GAME Input] set value', props<{ value: number }>());

export const startNewGame = createAction('[GAME] start new game', props<{ difficulty: Difficulty }>());
