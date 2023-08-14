import { createAction, props } from '@ngrx/store';
import { Cell, Board } from 'src/app/shared/models/board.model';
import { Game, GameData } from 'src/app/shared/models/game.model';
import { Difficulty } from 'sudoku-gen/dist/types/difficulty.type';

export const setBoard = createAction('[GAME - app] set board', props<{ board: Board | null }>());
export const gameWon = createAction('[GAME - app] game won');
export const loadGame = createAction('[GAME - app] load game', props<{ game: Game }>());
export const loadNewGame = createAction('[GAME - app] load new game', props<GameData>());
export const detectedIncorrectAnswer = createAction('[GAME - app] detected incorrect answer');
export const addSecond = createAction('[GAME - app] add second to gameTime');

export const setActiveCell = createAction('[GAME - user] set active cell', props<{ cell: Cell | null }>());
export const setValue = createAction('[GAME - user] set value', props<{ value: number }>());
export const clearValue = createAction('[GAME - user] Clear value');
export const startNewGame = createAction('[GAME - user] start new game', props<{ difficulty: Difficulty }>());
export const startDailyGame = createAction('[GAME - user] start daily game');

export const finishNow = createAction('[GAME - dev] finish game now');
