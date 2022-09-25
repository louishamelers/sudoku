import { Component } from '@angular/core';
import { getSudoku } from 'sudoku-gen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sudoku-app';

  constructor() {
    const sudoku = getSudoku('expert');
    console.log(sudoku);
  }
}
