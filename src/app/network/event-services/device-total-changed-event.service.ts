import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DeviceTotalChangedEventService {

  private _deviceTotalChangedEvent = new ReplaySubject<number>(1);

  deviceTotalChangedEvent$: Observable<number> = this._deviceTotalChangedEvent.asObservable();

  constructor() { }

  emit(pageNumber: number): void {
    this._deviceTotalChangedEvent.next(pageNumber);
  }
}
