import { Component, OnDestroy, OnInit } from '@angular/core';

import { DeviceTypes } from 'src/backend';
import { DeviceTypeFilterChangedEventService } from '../../event-services/device-type-filter-changed-event.service';
import { DeviceUrlParamsloadedEventService } from '../../event-services/device-url-params-loaded-event.service';
import { Subscription } from 'rxjs';
import { DeviceTypeFilterInitialChangeEventService } from '../../event-services/device-type-filter-initial-change-event.service';

@Component({
  selector: 'app-filter-devices',
  templateUrl: './filter-devices.component.html',
  styleUrls: ['./filter-devices.component.scss']
})
export class FilterDevicesComponent implements OnInit, OnDestroy {
  DeviceTypes = DeviceTypes;

  private subscription = new Subscription();
  selectedFilter = null;

  constructor(
    private deviceTypeFilterChangedEventService: DeviceTypeFilterChangedEventService,
    private deviceUrlparamsloadedEventService: DeviceUrlParamsloadedEventService,
    private deviceTypeFilterInitialChangeEventService: DeviceTypeFilterInitialChangeEventService,
  ) { }

  ngOnInit(): void {
    this.subscription.add(this.deviceUrlparamsloadedEventService.deviceUrlParamsloadedEvent$.subscribe(params => {
      const filter: string | null = params.filter;
      this.selectedFilter = filter;
      this.deviceTypeFilterInitialChangeEventService.emit(!!filter ? filter : null);
    }));
  }

  filterEmit(filter: string): void {
    this.selectedFilter = filter;
    this.deviceTypeFilterChangedEventService.emit(filter);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
