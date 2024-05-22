import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable()
export class DeviceUrlParamsloadedEventService {
  private _deviceUrlParamsloadedEvent = new ReplaySubject<Params>(1);
  deviceUrlParamsloadedEvent$: Observable<Params> = this._deviceUrlParamsloadedEvent.asObservable();

  emit(params: Params): void {
    this._deviceUrlParamsloadedEvent.next(params);
  }
}
