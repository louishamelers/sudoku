import { Component } from '@angular/core';
import { UpdateService } from './core/services/update/update.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'sudoku-app';

  constructor(_updateService: UpdateService) {}
}
