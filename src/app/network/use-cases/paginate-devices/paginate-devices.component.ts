import { Component, OnDestroy, OnInit } from '@angular/core';

import { DevicePageNumberChangedEventService } from '../../event-services/device-page-number-changed-event.service';
import { DeviceCountChangedEventService } from '../../event-services/device-count-changed-event.service';
import { DeviceTotalChangedEventService } from '../../event-services/device-total-changed-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-paginate-devices',
  templateUrl: './paginate-devices.component.html',
  styleUrls: ['./paginate-devices.component.scss']
})
export class PaginateDevicesComponent implements OnInit, OnDestroy {

  private initialPageNumber = 0;
  private initialCount = 10;
  private subscriptions = new Subscription();

  total = 0;

  constructor(
    private devicePageNumberChangedEventService: DevicePageNumberChangedEventService,
    private deviceCountChangedEventService: DeviceCountChangedEventService,
    private deviceTotalChangedEventService: DeviceTotalChangedEventService,
  ) { }

  ngOnInit(): void {
    this.nextPage();
    this.setCount(this.initialCount);
    this.subscriptions.add(this.deviceTotalChangedEventService.deviceTotalChangedEvent$.subscribe(total => this.setTotal(total)));
  }

  setCount(count: number): void {
    this.deviceCountChangedEventService.emit(count);
  }

  setTotal(total: number) {
    this.total = total;
  }

  nextPage(): void {
    this.initialPageNumber++;
    this.devicePageNumberChangedEventService.emit(this.initialPageNumber);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
