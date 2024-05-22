import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetDevicesApiService } from './get-devices-api.service';
import { Device } from '../../../backend';

@Injectable()
export class GetDevicesService {
  constructor(private getDevicesApiService: GetDevicesApiService) {}

  getDevices$(filter: string | null): Observable<Device[]> {
    return this.getDevicesApiService.getDevices(10, filter);
  }
}
