import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc, onSnapshot, DocumentData } from '@angular/fire/firestore';
import { filter, from, map, Observable, of, startWith, tap, withLatestFrom } from 'rxjs';
import { GameData } from 'src/app/shared/models/game.model';
import { GameService } from '../game/game.service';
import { NetworkService } from '../network/network.service';
import { documentDataToGameData, gameDataToDocumentData } from './daily.mapper';

@Injectable({
  providedIn: 'root',
})
export class DailyService {
  dailyGameData$ = this.selectTodaysDaily().pipe(
    withLatestFrom(this.networkService.networkStatus$),
    filter(([, online]) => !!online),
    map(([gameData]) => gameData),
    tap((gameData) => {
      if (!gameData) this.setDaily();
    }),
    startWith(null),
  );

  constructor(private store: Firestore, private gameService: GameService, private networkService: NetworkService) {}

  private selectTodaysDaily(): Observable<GameData | null> {
    return this.selectDaily(new Date().toISOString().split('T')[0]);
  }

  private selectDaily(dateString: string): Observable<GameData | null> {
    return new Observable((observer) => {
      return onSnapshot(
        doc(this.store, 'daily', dateString),
        (snapshot) => {
          const documentData: DocumentData | undefined = snapshot.data();
          documentData ? observer.next(documentDataToGameData(documentData)) : observer.next(null);
        },
        (error) => observer.error(error.message),
      );
    });
  }

  private setDaily(): void {
    const gameData = this.gameService.generateGameData();
    const dateString = new Date().toISOString().split('T')[0];
    setDoc(doc(this.store, 'daily', dateString), gameDataToDocumentData(gameData));
  }
}
