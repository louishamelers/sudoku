import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameModule } from './modules/game/game.module';
import { ROUTES } from './routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GameModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
