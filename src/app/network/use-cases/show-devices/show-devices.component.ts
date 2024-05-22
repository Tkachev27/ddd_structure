import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { GetDevicesService } from '../../data-services/get-devices.service';
import { Device } from 'src/backend';

@Component({
  selector: 'app-show-devices',
  templateUrl: './show-devices.component.html',
  styleUrls: ['./show-devices.component.css'],
})
export class ShowDevicesComponent {
  @Input() set filterByDeviceType(deviceType: string | null) {
    this.devices$ = this.getDevicesService.getDevices$(deviceType);
  }

  devices$: Observable<Device[]> | null = null;

  constructor(private getDevicesService: GetDevicesService) {}
}
