import { Component } from '@angular/core';
import { SelectedDevicesService } from '../../data-services/selected-devices.service';

@Component({
  selector: 'app-show-selected-devices',
  templateUrl: './show-selected-devices.component.html',
  styleUrls: ['./show-selected-devices.component.scss']
})
export class ShowSelectedDevicesComponent {
  constructor(public selectedDevicesService: SelectedDevicesService) { }
}
