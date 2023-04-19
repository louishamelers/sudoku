import { DocumentData } from '@angular/fire/firestore';
import { GameData } from 'src/app/shared/models/game.model';

export function documentDataToGameData(dd: DocumentData): GameData | null {
  const difficulty = dd['difficulty'];
  const board = dd['board'];
  const date = dd['date'];
  const title = dd['title'];

  if (!board) return null;

  return {
    difficulty,
    board: JSON.parse(board),
    date: new Date(date),
    title,
  };
}

export function gameDataToDocumentData(gameData: GameData): DocumentData {
  return {
    difficulty: gameData.difficulty,
    board: JSON.stringify(gameData.board),
    date: gameData.date?.getTime(),
    title: gameData.title,
  };
}
