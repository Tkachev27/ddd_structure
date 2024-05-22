import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetDevicesApiService } from './get-devices-api.service';
import { Device, DeviceRequest } from '../../../backend';

@Injectable()
export class GetDevicesService {
  constructor(private getDevicesApiService: GetDevicesApiService) {}

  getDevices$(request: DeviceRequest): Observable<{ devices: Device[], total: number }> {
    return this.getDevicesApiService.getDevices(request);
  }
}
