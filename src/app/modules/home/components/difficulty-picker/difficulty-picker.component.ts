import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { startNewGame } from 'src/app/core/state/game/game.actions';
import { InputComponent } from 'src/app/modules/game/components/input/input.component';
import { Difficulty } from 'src/app/shared/models/difficulty.model';

@Component({
  selector: 'app-difficulty-picker',
  templateUrl: './difficulty-picker.component.html',
  styleUrls: ['./difficulty-picker.component.scss'],
})
export class DifficultyPickerComponent {
  constructor(private store: Store, private dialogService: DialogService) {}

  onNewGameClick(difficulty: Difficulty) {
    this.dialogService.open(InputComponent);

    // this.store.dispatch(startNewGame({ difficulty }));
  }
}
