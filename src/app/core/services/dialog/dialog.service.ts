import { Injectable, Injector } from '@angular/core';
import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DialogRef } from './util/dialogRef';
import { DIALOG_DATA } from './util/dialogTokens';

export interface DialogConfig {
  data?: any;
}

/**
 * Implementation for @angular/cdk dialog
 * @see https://johnbwoodruff.com/posts/angular-cdk-dialog/
 * @see https://stackblitz.com/edit/cdk-dialog-example-p1?file=src%2Fapp%2Fdialog%2Fdialog.service.ts
 */
@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T>(component: ComponentType<T>, config?: DialogConfig): DialogRef {
    // Globally centered position strategy
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    // Create the overlay with customizable options
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',
    });

    // Create dialogRef to return
    const dialogRef = new DialogRef(overlayRef);

    // Create injector to be able to reference the DialogRef from within the component
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: DialogRef, useValue: dialogRef },
        { provide: DIALOG_DATA, useValue: config?.data },
      ],
    });

    // Attach component portal to the overlay
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return dialogRef;
  }
}
