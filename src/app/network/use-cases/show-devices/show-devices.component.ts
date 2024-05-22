import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subscription, combineLatest, map, merge, switchMap, tap } from 'rxjs';

import { GetDevicesService } from '../../data-services/get-devices.service';
import { Device, DeviceRequest } from 'src/backend';
import { DeviceTypeFilterChangedEventService } from '../../event-services/device-type-filter-changed-event.service';
import { DevicePageNumberChangedEventService } from '../../event-services/device-page-number-changed-event.service';
import { DeviceCountChangedEventService } from '../../event-services/device-count-changed-event.service';
import { DeviceTotalChangedEventService } from '../../event-services/device-total-changed-event.service';
import { DeviceCountInitialChangeEventService } from '../../event-services/device-count-initial-change-event.service';
import { DevicePageNumberInitialChangeEventService } from '../../event-services/device-page-number-initial-change-event.service';
import { DeviceTypeFilterInitialChangeEventService } from '../../event-services/device-type-filter-initial-change-event.service';
import { ShowDevicesInitializedEventService } from '../../event-services/show-devices-initialized-event.service';

@Component({
  selector: 'app-show-devices',
  templateUrl: './show-devices.component.html',
  styleUrls: ['./show-devices.component.css'],
})
export class ShowDevicesComponent implements OnInit, OnDestroy {

  private showDevices = new ReplaySubject<DeviceRequest>(1);
  private subscriptions = new Subscription();

  devices$: Observable<Device[]> = this.showDevices.asObservable().pipe(
    switchMap(state => this.getDevicesService.getDevices$(state)),
    tap(({ total }) => this.deviceTotalChangedEventService.emit(total)),
    map(({ devices }) => devices)
  );

  constructor(
    private getDevicesService: GetDevicesService,
    private deviceTypeFilterChangedEventService: DeviceTypeFilterChangedEventService,
    private devicePageNumberChangedEventService: DevicePageNumberChangedEventService,
    private deviceCountChangedEventService: DeviceCountChangedEventService,
    private deviceTotalChangedEventService: DeviceTotalChangedEventService,
    private deviceCountInitialChangeEventService: DeviceCountInitialChangeEventService,
    private devicePageNumberInitialChangeEventService: DevicePageNumberInitialChangeEventService,
    private deviceTypeFilterInitialChangeEventService: DeviceTypeFilterInitialChangeEventService,
    private showDevicesInitializedEventService: ShowDevicesInitializedEventService,
  ) {}

  ngOnInit(): void {
    this.showDevicesInitializedEventService.emit();
    const count$ = merge(
      this.deviceCountChangedEventService.deviceCountChangedEvent$,
      this.deviceCountInitialChangeEventService.deviceCountInitialChangeEvent$
    );

    const pageNumber$ = merge(
      this.devicePageNumberChangedEventService.devicePageNumberChangedEvent$,
      this.devicePageNumberInitialChangeEventService.devicePageNumberInitialChangeEvent$
    );

    const filter$ = merge(
      this.deviceTypeFilterChangedEventService.deviceTypeFilterChangedEvent$,
      this.deviceTypeFilterInitialChangeEventService.deviceTypeFilterInitialChangeEvent$
    );

    this.subscriptions.add(combineLatest([count$, pageNumber$, filter$]).subscribe(
      ([count, pageNumber, filter]) => this.showDevices.next({ count, pageNumber, filter })
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
