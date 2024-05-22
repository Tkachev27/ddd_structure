import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class ShowDevicesInitializedEventService {
  private _showDevicesInitializedEvent = new ReplaySubject<void>(1);
  showDevicesInitializedEvent$: Observable<void> = this._showDevicesInitializedEvent.asObservable();

  emit(): void {
    this._showDevicesInitializedEvent.next();
  }
}
