import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsStarComponent } from '../ratings-star/ratings-star.component';
import { Comment } from '@core/interfaces/Comment';
import usersJson from '@core/mocks/users.json';

@Component({
  selector: 'app-card-review',
  standalone: true,
  imports: [CommonModule, RatingsStarComponent],
  templateUrl: './card-review.component.html',
  styleUrls: ['./card-review.component.css'],
})
export class CardReviewComponent {
  @Input() comment!: Comment;
}
