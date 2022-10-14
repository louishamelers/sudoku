import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor(private readonly updates: SwUpdate) {
    console.log('updates...');

    this.updates.versionUpdates.subscribe((event) => {
      console.log(event);

      this.showAppUpdateAlert();
    });
  }
  showAppUpdateAlert() {
    const header = 'App Update available';
    const message = 'Choose Ok to update';
    const action = this.doAppUpdate;
    const caller = this;
    // Use MatDialog or ionicframework's AlertController or similar
    // presentAlert(header, message, action, caller);
    console.log('there is an update ready!');
  }
  doAppUpdate() {
    this.updates.activateUpdate().then(() => document.location.reload());
  }
}
