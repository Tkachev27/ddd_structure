import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, switchMap } from 'rxjs';

import { GetDevicesService } from '../../data-services/get-devices.service';
import { Device, DeviceRequest } from 'src/backend';
import { DeviceTypeFilterChangedEventService } from '../../event-services/device-type-filter-changed-event.service';

@Component({
  selector: 'app-show-devices',
  templateUrl: './show-devices.component.html',
  styleUrls: ['./show-devices.component.css'],
})
export class ShowDevicesComponent implements OnInit, OnDestroy {
  private lastRequest: DeviceRequest = { filter: null, count: 10 };
  private showDevices = new BehaviorSubject<DeviceRequest>(this.lastRequest);
  private subscriptions = new Subscription();

  devices$: Observable<Device[]> = this.showDevices.asObservable().pipe(
    switchMap(state => this.getDevicesService.getDevices$(state))
  );

  constructor(
    private getDevicesService: GetDevicesService,
    private deviceTypeFilterChangedEventService: DeviceTypeFilterChangedEventService
  ) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.deviceTypeFilterChangedEventService.deviceTypeFilterChangedEvent$.subscribe(
        filter => this.showDevices.next({ ...this.lastRequest, filter })
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
