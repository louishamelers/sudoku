import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Firestoree';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// NGRX
import { StoreModule } from '@ngrx/store';
// import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { environment } from 'src/environments/environment';

import { gameReducer } from './state/game/game.reducer';
import { GameEffects } from './state/game/game.effects';
import { BrowserModule } from '@angular/platform-browser';
import { UpdateService } from './services/update/update.service';

/**
 * CoreModule, must be imported only by root module.
 * @see https://angular.io/guide/styleguide#style-04-06
 */
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,

    // Firestore
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),

    // NGRX - Instrumentation must be imported after importing StoreModule (config is optional)
    StoreModule.forRoot({ gameState: gameReducer }),
    EffectsModule.forRoot([GameEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [UpdateService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    /**
     * Prevent re-importing the CoreModule from anywhere except root AppModule
     * @see https://angular.io/styleguide#!#style04-12
     */
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
}
