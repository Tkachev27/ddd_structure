import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NetworkComponent } from './network.component';
import { FilterDevicesComponent } from './use-cases/filter-devices/filter-devices.component';
import { SelectDeviceComponent } from './use-cases/select-device/select-device.component';
import { ShowDevicesComponent } from './use-cases/show-devices/show-devices.component';
import { ShowSelectedDevicesComponent } from './use-cases/show-selected-devices/show-selected-devices.component';
import { GetDevicesApiService } from './data-services/get-devices-api.service';
import { GetDevicesService } from './data-services/get-devices.service';
import { DeviceTypeFilterChangedEventService } from './event-services/device-type-filter-changed-event.service';
import { SelectedDevicesService } from './data-services/selected-devices.service';
import { NetworkRoutingModule } from './network-router.module';
import { NetworkNavigationService } from './network-navigation.service';
import { PaginateDevicesComponent } from './use-cases/paginate-devices/paginate-devices.component';
import { DevicePageNumberChangedEventService } from './event-services/device-page-number-changed-event.service';
import { DeviceCountChangedEventService } from './event-services/device-count-changed-event.service';
import { DeviceTotalChangedEventService } from './event-services/device-total-changed-event.service';
import { DeviceUrlParamsloadedEventService } from './event-services/device-url-params-loaded-event.service';
import { DeviceCountInitialChangeEventService } from './event-services/device-count-initial-change-event.service';
import { DevicePageNumberInitialChangeEventService } from './event-services/device-page-number-initial-change-event.service';
import { DeviceTypeFilterInitialChangeEventService } from './event-services/device-type-filter-initial-change-event.service';
import { ShowDevicesInitializedEventService } from './event-services/show-devices-initialized-event.service';

@NgModule({
  declarations: [
    NetworkComponent,
    FilterDevicesComponent,
    SelectDeviceComponent,
    ShowDevicesComponent,
    ShowSelectedDevicesComponent,
    PaginateDevicesComponent,
  ],
  imports: [
    CommonModule,
    NetworkRoutingModule
  ],
  providers: [
    NetworkNavigationService,
    SelectedDevicesService,
    GetDevicesApiService,
    GetDevicesService,
    DeviceTypeFilterChangedEventService,
    DevicePageNumberChangedEventService,
    DeviceCountChangedEventService,
    DeviceTotalChangedEventService,
    DeviceUrlParamsloadedEventService,
    DeviceCountInitialChangeEventService,
    DevicePageNumberInitialChangeEventService,
    DeviceTypeFilterInitialChangeEventService,
    ShowDevicesInitializedEventService,
  ],
})
export class NetworkModule { }
