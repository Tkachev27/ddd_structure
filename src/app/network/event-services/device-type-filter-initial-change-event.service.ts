import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DeviceTypeFilterInitialChangeEventService {

  private _deviceTypeFilterInitialChangeEvent = new ReplaySubject<string>(1);

  deviceTypeFilterInitialChangeEvent$: Observable<string> = this._deviceTypeFilterInitialChangeEvent.asObservable();

  constructor() { }

  emit(filter: string | null): void {
    this._deviceTypeFilterInitialChangeEvent.next(filter);
  }

}
