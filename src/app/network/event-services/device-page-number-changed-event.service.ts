import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DevicePageNumberChangedEventService {

  private _devicePageNumberChangedEvent = new ReplaySubject<number>(1);

  devicePageNumberChangedEvent$: Observable<number> = this._devicePageNumberChangedEvent.asObservable();

  constructor() { }

  emit(pageNumber: number): void {
    this._devicePageNumberChangedEvent.next(pageNumber);
  }
}
