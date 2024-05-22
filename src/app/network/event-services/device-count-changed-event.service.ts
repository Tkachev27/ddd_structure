import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DeviceCountChangedEventService {

  private _deviceCountChangedEvent = new ReplaySubject<number>(1);

  deviceCountChangedEvent$: Observable<number> = this._deviceCountChangedEvent.asObservable();

  constructor() { }

  emit(pageNumber: number): void {
    this._deviceCountChangedEvent.next(pageNumber);
  }
}
