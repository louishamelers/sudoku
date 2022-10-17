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
      if (event.type === 'VERSION_READY') {
        this.showAppUpdateAlert();
      }
    });
  }

  showAppUpdateAlert() {
    if (confirm("There's an update ready, update now?")) {
      this.doAppUpdate();
    }
    // const header = 'App Update available';
    // const message = 'Choose Ok to update';
    // const action = this.doAppUpdate;
    // const caller = this;
    // // Use MatDialog or ionicframework's AlertController or similar
    // // presentAlert(header, message, action, caller);
    // console.log('there is an update ready!');
  }

  doAppUpdate() {
    // this might or might not work actually...
    this.updates.activateUpdate().then((e) => {
      console.log('update installed...');
      document.location.reload();
    });
  }
}
