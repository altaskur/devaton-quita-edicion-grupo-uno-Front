import { Component, Input } from '@angular/core';
import { Service } from '@core/interfaces/Service';
import { RatingsStarComponent } from '../ratings-star/ratings-star.component';

@Component({
  selector: 'app-service-preview',
  standalone: true,
  imports: [RatingsStarComponent],
  templateUrl: './service-preview.component.html',
})
export class ServicePreviewComponent {
  @Input() service!: Service;
}
