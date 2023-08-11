import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '@core/interfaces/Service';
import { ServiceService } from '@core/services/service/service.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ServicePreviewComponent } from '@shared/components/service-preview/service-preview.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ServicePreviewComponent, ButtonComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  serviceList: Service[] = [];
  serviceListIsEmpty = true;
  serviceListCount = 0;
  serviceListLoading = true;
  serviceSearchTerm = '';

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get services() {
    return this.serviceService.services;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.serviceSearchTerm = params['term'];

      // Redirect to home if no search term
      if (!this.serviceSearchTerm || this.serviceSearchTerm == '') {
        this.router.navigate(['/']);
      }

      // Load services
      this.serviceService.loadServices({
        term: this.serviceSearchTerm,
      });
    });

    this.services.subscribe(data => {
      this.serviceList = data;
      this.serviceListLoading = false;
      this.serviceListIsEmpty = data.length <= 0;
      this.serviceListCount = data.length;
    });
  }
}
