import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '@core/services/service.service';
import { listAnimation } from '@core/animations/list-animation';

@Component({
  selector: 'app-my-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-services.component.html',
  animations: [listAnimation],
})
export class MyServicesComponent implements OnInit {
  constructor(private _serviceServices: ServiceService) {}

  get services() {
    return this._serviceServices.services;
  }

  ngOnInit(): void {
    this._serviceServices.loadServices();
  }
}
