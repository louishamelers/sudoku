import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameModule } from './modules/game/game.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GameModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
