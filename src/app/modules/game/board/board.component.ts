import { Component, OnInit } from '@angular/core';
import { combineLatest, map, startWith } from 'rxjs';
import { GameService } from 'src/app/core/services/game.service';
import { SudokuField } from 'src/app/shared/models/sudoku.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  sudokuData$ = combineLatest([this.gameService.puzzle$.pipe(startWith(undefined)), this.gameService.activeCell$.pipe(startWith(undefined))]).pipe(
    map(([board, activeCell]) => ({ board, activeCell })),
  );

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.startNewGame('expert');
  }

  onFieldClick(field: SudokuField): void {
    this.gameService.setActiveField(field);
  }
}
