import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectErrors } from 'src/app/core/state/game/game.selectors';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  errors$ = this.store.select(selectErrors).pipe(map((errors) => ({ value: errors })));
  maxErrors = environment.errorLeeway;

  constructor(private store: Store) {
    this.errors$.subscribe(console.log);
  }
}
