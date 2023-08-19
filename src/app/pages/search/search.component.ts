import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Service } from '@core/interfaces/Service';
import { ServiceService } from '@core/services/service.service';
import { InputSelectComponent } from '@shared/components/input-select/input-select.component';
import { ServicePreviewComponent } from '@shared/components/service-preview/service-preview.component';
import { SvgImageComponent } from '@shared/components/svg-image/svg-image.component';
import { Observable, map } from 'rxjs';
import { InputSelectOption } from '@shared/components/input-select/input-select-option';
import { CategoryService } from '@core/services/category.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    ServicePreviewComponent,
    SvgImageComponent,
    InputSelectComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  serviceSearchTerm = '';
  showFilters = false;
  filters: FormGroup;

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private _fb: FormBuilder,
    private _categoryService: CategoryService
  ) {
    this.filters = this._fb.group({
      category: [''],
    });
  }

  get services() {
    return this.serviceService.services;
  }

  get categories(): Observable<InputSelectOption[]> {
    return this._categoryService.categories.pipe(
      map(categories =>
        categories.map<InputSelectOption>(category => ({
          value: category.id,
          label: category.name,
        }))
      )
    );
  }

  ngOnInit(): void {
    this._watchFilters();

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
  }

  private _watchFilters() {
    this.filters.valueChanges.subscribe(data => {
      // TODO: Filter services
    });
  }
}
