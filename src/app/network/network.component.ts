import { Component } from '@angular/core';
import { NetworkNavigationService } from './network-navigation.service';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss']
})
export class NetworkComponent {
  constructor(private networkNavigationService: NetworkNavigationService) {}
}
