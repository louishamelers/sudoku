import { Injectable } from '@angular/core';
import { Subscription, merge, of, fromEvent, map, ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  networkStatus$: Observable<boolean> = merge(of(null), fromEvent(window, 'online'), fromEvent(window, 'offline')).pipe(map(() => navigator.onLine));
}
