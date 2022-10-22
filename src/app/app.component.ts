import { Component } from '@angular/core';
import { NetworkService } from './core/services/network/network.service';
import { UpdateService } from './core/services/update/update.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'sudoku-app';

  constructor(_updateService: UpdateService, _networkService: NetworkService) {
    _networkService.networkStatus$.subscribe((e) => console.log(e));
  }
}
