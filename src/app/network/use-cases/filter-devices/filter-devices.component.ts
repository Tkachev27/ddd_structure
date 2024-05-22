import { Component, OnInit } from '@angular/core';

import { DeviceTypes } from 'src/backend';
import { DeviceTypeFilterChangedEventService } from '../../event-services/device-type-filter-changed-event.service';

@Component({
  selector: 'app-filter-devices',
  templateUrl: './filter-devices.component.html',
  styleUrls: ['./filter-devices.component.scss']
})
export class FilterDevicesComponent implements OnInit {
  DeviceTypes = DeviceTypes;

  constructor(private deviceTypeFilterChangedEventService: DeviceTypeFilterChangedEventService) { }

  ngOnInit(): void {
    this.filterEmit(null);
  }

  filterEmit(filter: string): void {
    this.deviceTypeFilterChangedEventService.emit(filter);
  }
}
