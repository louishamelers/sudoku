import { createAction, props } from '@ngrx/store';
import { Board, Cell, Difficulty, GameData } from 'src/app/shared/models/game.model';

export const setGameData = createAction('[GAME] set game data', props<{ gameData: GameData }>());
export const setActiveCell = createAction('[GAME] set active field-cell', props<{ cell: Cell }>());
export const setBoard = createAction('[GAME] set board', props<{ board: Board }>());

export const startNewGame = createAction('[GAME] start new game', props<{ difficulty: Difficulty }>());
export const setValue = createAction('[GAME] set value', props<{ value: number }>());
