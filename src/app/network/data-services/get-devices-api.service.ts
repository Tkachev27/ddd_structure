import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Device, getDevices } from '../../../backend';

@Injectable()
export class GetDevicesApiService {
  getDevices(count: number, filter: string | null): Observable<Device[]> {
    return getDevices(count, filter);
  }
}
