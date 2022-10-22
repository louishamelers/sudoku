import { Component } from '@angular/core';
import { DailyGameService } from './core/services/daily-game/daily-game.service';
import { UpdateService } from './core/services/update/update.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'sudoku-app';

  constructor(_updateService: UpdateService, _dailyGameService: DailyGameService) {}
}
