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
import { SelectedDevicesService } from './use-cases/select-device/selected-devices.service';
import { NetworkRoutingModule } from './network-router.module';

@NgModule({
  declarations: [NetworkComponent, FilterDevicesComponent, SelectDeviceComponent, ShowDevicesComponent, ShowSelectedDevicesComponent],
  imports: [CommonModule, NetworkRoutingModule],
  providers: [SelectedDevicesService, GetDevicesApiService, GetDevicesService, DeviceTypeFilterChangedEventService]
})
export class NetworkModule { }
