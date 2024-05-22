import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DevicePageNumberInitialChangeEventService {

  private _devicePageNumberInitialChangeEvent = new ReplaySubject<number>(1);

  devicePageNumberInitialChangeEvent$: Observable<number> = this._devicePageNumberInitialChangeEvent.asObservable();

  constructor() { }

  emit(pageNumber: number): void {
    this._devicePageNumberInitialChangeEvent.next(pageNumber);
  }
}
