import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DeviceTypeFilterChangedEventService {

  private _deviceTypeFilterChangedEvent = new ReplaySubject<void>(1);

  deviceTypeFilterChangedEvent$: Observable<void> = this._deviceTypeFilterChangedEvent.asObservable();

  constructor() { }

  emit(): void {
    this._deviceTypeFilterChangedEvent.next();
  }

}
