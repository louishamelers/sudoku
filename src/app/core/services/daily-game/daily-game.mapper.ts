import { DocumentData } from '@angular/fire/firestore';
import { GameData } from 'src/app/shared/models/game.model';

export function documentDataToGameData(dd: DocumentData): GameData | null {
  const difficulty = dd['difficulty'];
  const board = dd['board'];

  if (!difficulty || !board) return null;

  return {
    difficulty,
    board: JSON.parse(board),
  };
}
