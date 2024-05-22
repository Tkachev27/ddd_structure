import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class NetworkNavigationService {

  constructor(private route: ActivatedRoute, private router: Router) { }

}
