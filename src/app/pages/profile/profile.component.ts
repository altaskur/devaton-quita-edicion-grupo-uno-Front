import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsStarComponent } from '@shared/components/ratings-star/ratings-star.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CardOwnerProfileComponent } from '@shared/components/card-owner-profile/card-owner-profile.component';
import { CardReviewComponent } from '@shared/components/card-review/card-review.component';
import usersJson from '@core/mocks/users.json';
import commentsJson from '@core/mocks/comments.json';
import { User } from '@core/interfaces/User';
import { Comment } from '@core/interfaces/Comment';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    RatingsStarComponent,
    ButtonComponent,
    CardOwnerProfileComponent,
    CardReviewComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor() {}

  userId: number = 3;
  comments: Comment[] = commentsJson;
  reviews = this.createReviewsArray();

  getOwnerById(id: number) {
    let userData = usersJson.find(user => user.id === id);

    return userData;
  }

  createReviewsArray() {
    let reviews = [];
    for (const comment of commentsJson) {
      let review = {
        name: this.getOwnerById(comment.profile_id)?.name || 'Anonímo',
        image:
          this.getOwnerById(comment.profile_id)?.image || 'valor por defecto',
        rating: comment.rating,
        comment: comment.comment,
      };

      reviews.push(review);
    }
    return reviews;
  }

  user = this.getOwnerById(this.userId) as User;
}
