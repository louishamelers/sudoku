import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Subject } from 'rxjs';
import { selectErrors } from 'src/app/core/state/game/game.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnDestroy {
  destroy$ = new Subject<void>();
  errors$ = this.store.select(selectErrors).pipe(map((errors) => ({ value: errors })));

  maxErrors = environment.maxErrors;

  constructor(private store: Store) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
