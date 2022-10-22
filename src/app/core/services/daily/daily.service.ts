import { Injectable } from '@angular/core';
import { Firestore, setDoc, doc, onSnapshot, DocumentData } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { GameData } from 'src/app/shared/models/game.model';
import { documentDataToGameData } from './daily.mapper';

@Injectable({
  providedIn: 'root',
})
export class DailyGameService {
  constructor(private store: Firestore) {
    this.selectTodaysDaily().subscribe((e) => console.log(e));
  }

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
}
