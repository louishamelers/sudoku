import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameModule } from './modules/game/game.module';
import { ROUTES } from './routes';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, GameModule, RouterModule.forRoot(ROUTES), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
