// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { Environment } from './environment.model';

export const environment: Environment = {
  production: false,
  puzzleSize: 9,
  maxErrors: 3,
  firebase: {
    apiKey: 'AIzaSyAgbFRxiUZqSXgGHBGpVDZFIpzoHrT9dME',
    authDomain: 'sudoku-cef3b.firebaseapp.com',
    projectId: 'sudoku-cef3b',
    storageBucket: 'sudoku-cef3b.appspot.com',
    messagingSenderId: '784903023710',
    appId: '1:784903023710:web:d577d5b4011f864cbdd8cf',
    measurementId: 'G-YL75TXC1Y9',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
