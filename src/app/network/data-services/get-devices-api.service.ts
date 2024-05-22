import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Device, DeviceRequest, getDevices } from '../../../backend';

@Injectable()
export class GetDevicesApiService {
  getDevices(request: DeviceRequest): Observable<{ devices: Device[], total: number }> {
    return getDevices(request);
  }
}
