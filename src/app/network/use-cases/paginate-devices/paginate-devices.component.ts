import { Component, OnDestroy, OnInit } from '@angular/core';

import { DevicePageNumberChangedEventService } from '../../event-services/device-page-number-changed-event.service';
import { DeviceCountChangedEventService } from '../../event-services/device-count-changed-event.service';
import { DeviceTotalChangedEventService } from '../../event-services/device-total-changed-event.service';
import { Subscription } from 'rxjs';
import { DeviceUrlParamsloadedEventService } from '../../event-services/device-url-params-loaded-event.service';
import { DeviceCountInitialChangeEventService } from '../../event-services/device-count-initial-change-event.service';
import { DevicePageNumberInitialChangeEventService } from '../../event-services/device-page-number-initial-change-event.service';

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
  count = this.initialCount;
  pageNumber = this.initialPageNumber;

  constructor(
    private devicePageNumberChangedEventService: DevicePageNumberChangedEventService,
    private deviceCountChangedEventService: DeviceCountChangedEventService,
    private deviceTotalChangedEventService: DeviceTotalChangedEventService,
    private deviceUrlparamsloadedEventService: DeviceUrlParamsloadedEventService,
    private devicePageNumberInitialChangeEventService: DevicePageNumberInitialChangeEventService,
    private deviceCountInitialChangeEventService: DeviceCountInitialChangeEventService,
  ) { }

  ngOnInit(): void {
    this.nextPage();
    this.setCount(this.initialCount);
    this.subscriptions.add(this.deviceTotalChangedEventService.deviceTotalChangedEvent$.subscribe(total => this.setTotal(total)));
    this.subscriptions.add(this.deviceUrlparamsloadedEventService.deviceUrlParamsloadedEvent$.subscribe(params => {
      const pageNumber: number | null = params.pageNumber;
      this.pageNumber = !!pageNumber ? pageNumber : this.initialPageNumber;
      this.devicePageNumberInitialChangeEventService.emit(!!pageNumber ? pageNumber : this.initialPageNumber);
      const count: number | null = params.count;
      this.count = !!count ? count : this.initialCount;
      this.deviceCountInitialChangeEventService.emit(!!count ? count : this.initialCount);
    }));
  }

  setCount(count: number): void {
    this.count = count;
    this.deviceCountChangedEventService.emit(count);
  }

  setTotal(total: number): void {
    this.total = total;
  }

  prevPage(): void {
    this.initialPageNumber--;
    this.pageNumber = this.initialPageNumber;
    this.devicePageNumberChangedEventService.emit(this.initialPageNumber);
  }

  nextPage(): void {
    this.initialPageNumber++;
    this.pageNumber = this.initialPageNumber;
    this.devicePageNumberChangedEventService.emit(this.initialPageNumber);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
