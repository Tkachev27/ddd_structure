import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DeviceTypeFilterChangedEventService {

  private _deviceTypeFilterChangedEvent = new ReplaySubject<string>(1);

  deviceTypeFilterChangedEvent$: Observable<string> = this._deviceTypeFilterChangedEvent.asObservable();

  constructor() { }

  emit(filter: string | null): void {
    this._deviceTypeFilterChangedEvent.next(filter);
  }

}
