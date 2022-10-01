import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ROUTES } from './home.routes';
import { DifficultyPickerComponent } from './difficulty-picker/difficulty-picker.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, DifficultyPickerComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
