import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceService } from '@core/services/service.service';
import { listAnimation } from '@core/animations/list-animation';

@Component({
  selector: 'app-contracts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contracts.component.html',
  animations: [listAnimation],
})
export class ContractsComponent {
  constructor(private _serviceServices: ServiceService) {
    this._serviceServices.loadContracts();
  }

  get contracts() {
    return this._serviceServices.contracts;
  }
}
