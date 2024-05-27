import { Injectable } from '@angular/core';
import { Device } from 'src/backend';
import { DeviceTypeFilterChangedEventService } from './../event-services/device-type-filter-changed-event.service';

@Injectable()
export class SelectedDevicesService {

  selectedDevices: Device[] = [];

  constructor(private deviceTypeFilterChangedEventService: DeviceTypeFilterChangedEventService) {
    deviceTypeFilterChangedEventService.deviceTypeFilterChangedEvent$.subscribe(() => this.clearSelected());
  }

  clearSelected(): void {
    this.selectedDevices = [];
  }

  toggle(device: Device): void {
    const selected = this.selectedDevices.some(d => d.ip === device.ip && d.model === device.model);
    if (selected) {
      this.selectedDevices = this.selectedDevices.filter(d => d.ip !== device.ip);
    } else {
      this.selectedDevices = [...this.selectedDevices, device];
    }
  }
}
