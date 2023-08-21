import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '@shared/components/input-text/input-text.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputSelectComponent } from '@shared/components/input-select/input-select.component';
import { CategoryService } from '@core/services/category.service';
import { Observable, map } from 'rxjs';
import { InputSelectOption } from '@shared/components/input-select/input-select-option';
import { TagsService } from '@core/services/tags.service';
import { CitiesService } from '@core/services/cities.service';
import { InputSelectMultipleComponent } from '@shared/components/input-select-multiple/input-select-multiple.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-service',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputSelectComponent,
    InputSelectMultipleComponent,
    RouterModule,
  ],
  templateUrl: './create-service.component.html',
})
export class CreateServiceComponent {
  form: FormGroup;

  constructor(
    _fb: FormBuilder,
    private _categoryService: CategoryService,
    private _tagService: TagsService,
    private _citiesService: CitiesService
  ) {
    this.form = _fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]],
      tags: ['', [Validators.required]],
      city: ['', [Validators.required]],
    });
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

  get tags(): Observable<InputSelectOption[]> {
    return this._tagService.tags.pipe(
      map(tags =>
        tags.map<InputSelectOption>(tag => ({
          value: tag.id,
          label: tag.name,
        }))
      )
    );
  }

  get cities(): Observable<InputSelectOption[]> {
    return this._citiesService.cities.pipe(
      map(cities =>
        cities.map<InputSelectOption>(city => ({
          value: city.id,
          label: `${city.name}, ${city.country}`,
        }))
      )
    );
  }

  onSubmit(): void {
    // TODO: Implements onSubmit
  }
}
