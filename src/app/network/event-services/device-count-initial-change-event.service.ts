import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DeviceCountInitialChangeEventService {

  private _deviceCountInitialChangeEvent = new ReplaySubject<number>(1);

  deviceCountInitialChangeEvent$: Observable<number> = this._deviceCountInitialChangeEvent.asObservable();

  constructor() { }

  emit(pageNumber: number): void {
    this._deviceCountInitialChangeEvent.next(pageNumber);
  }
}
