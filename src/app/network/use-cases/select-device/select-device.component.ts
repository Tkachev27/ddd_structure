import { Component, Input } from '@angular/core';

import { Device } from 'src/backend';
import { SelectedDevicesService } from './selected-devices.service';

@Component({
  selector: 'app-select-device',
  templateUrl: './select-device.component.html',
  styleUrls: ['./select-device.component.scss']
})
export class SelectDeviceComponent {
  @Input() device: Device;

  constructor(private selectedDevicesService: SelectedDevicesService) { }

  toggle(): void {
    this.selectedDevicesService.toggle(this.device);
  }
}
