import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsStarComponent } from '../ratings-star/ratings-star.component';
import { User } from '@core/interfaces/User';

@Component({
  selector: 'app-card-review',
  standalone: true,
  imports: [CommonModule, RatingsStarComponent],
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.css'],
})
export class CardReviewComponent {
  @Input() user!: User;
}
