import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';

import { DeviceCountChangedEventService } from './event-services/device-count-changed-event.service';
import { DevicePageNumberChangedEventService } from './event-services/device-page-number-changed-event.service';
import { DeviceTypeFilterChangedEventService } from './event-services/device-type-filter-changed-event.service';
import { DeviceUrlParamsloadedEventService } from './event-services/device-url-params-loaded-event.service';
import { ShowDevicesInitializedEventService } from './event-services/show-devices-initialized-event.service';

@Injectable()
export class NetworkNavigationService {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private deviceUrlParamsloadedEventService: DeviceUrlParamsloadedEventService,
    private devicePageNumberChangedEventService: DevicePageNumberChangedEventService,
    private deviceCountChangedEventService: DeviceCountChangedEventService,
    private deviceTypeFilterChangedEventService: DeviceTypeFilterChangedEventService,
    private showDevicesInitializedEventService: ShowDevicesInitializedEventService,
  ) {
    devicePageNumberChangedEventService.devicePageNumberChangedEvent$.subscribe(
      pageNumber => this.addDevicePageNumberQueryParam(pageNumber)
    );
    deviceCountChangedEventService.deviceCountChangedEvent$.subscribe(count => this.addDeviceCountQueryParam(count));
    deviceTypeFilterChangedEventService.deviceTypeFilterChangedEvent$.subscribe(filter => this.addDeviceFilterQueryParam(filter));
    showDevicesInitializedEventService.showDevicesInitializedEvent$.subscribe(() => this.applyInitialDeviceQueryParams());

    this.router.events.subscribe(event => {
      if ( event instanceof NavigationStart && event.navigationTrigger === 'popstate') {
        const queryParams: Params = this.router.parseUrl(event.url).queryParams;
        deviceUrlParamsloadedEventService.emit(queryParams);
      }
    });
  }

  private applyInitialDeviceQueryParams(): void {
    const queryParams: Params = this.route.snapshot.queryParams;
    this.deviceUrlParamsloadedEventService.emit(queryParams);
  }


  private addDevicePageNumberQueryParam(pageNumber: number): void {
    this.router.navigate([], { queryParams: { pageNumber }, queryParamsHandling: 'merge' });
  }

  private addDeviceCountQueryParam(count: number): void {
    this.router.navigate([], { queryParams: { count }, queryParamsHandling: 'merge' });
  }

  private addDeviceFilterQueryParam(filter: string): void {
    this.router.navigate([], { queryParams: { filter }, queryParamsHandling: 'merge' });
  }

}
