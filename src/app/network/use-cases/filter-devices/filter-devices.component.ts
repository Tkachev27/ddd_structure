import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DeviceTypes } from 'src/backend';
import { DeviceTypeFilterChangedEventService } from '../../event-services/device-type-filter-changed-event.service';

@Component({
  selector: 'app-filter-devices',
  templateUrl: './filter-devices.component.html',
  styleUrls: ['./filter-devices.component.scss']
})
export class FilterDevicesComponent  {
  DeviceTypes = DeviceTypes;
  deviceType$ = new BehaviorSubject<string | null>(null);

  constructor(private deviceTypeFilterChangedEventService: DeviceTypeFilterChangedEventService) { }

  filterEmit(filter: string): void {
    this.deviceType$.next(filter);
    this.deviceTypeFilterChangedEventService.emit();
  }
}
