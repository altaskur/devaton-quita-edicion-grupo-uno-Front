import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsStarComponent } from '@shared/components/ratings-star/ratings-star.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CardOwnerProfileComponent } from '@shared/components/card-owner-profile/card-owner-profile.component';
import { CardReviewComponent } from '@shared/components/card-review/card-review.component';
import usersJson from '@core/mocks/users.json';
import { User } from '@core/interfaces/User';

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

  getOwnerById(id: number) {
    let userData = usersJson.find(user => user.id === id);

    return userData;
  }

  user = this.getOwnerById(this.userId) as User;
}
