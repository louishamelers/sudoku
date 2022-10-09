import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';
import { selectActiveGameState } from '../state/game/game.selectors';

@Injectable({
  providedIn: 'root',
})
export class canActivateGameBoard implements CanActivate {
  constructor(private store: Store, private router: Router) {}
  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.store.select(selectActiveGameState).pipe(
      map((gameState) => !!gameState.board),
      tap((canActivate) => {
        console.log(canActivate);

        if (!canActivate) this.router.navigate([''], { queryParams: { returnUrl: state.url } });
      }),
    );
  }
}
