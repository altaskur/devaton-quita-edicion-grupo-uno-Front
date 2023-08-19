import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsStarComponent } from '@shared/components/ratings-star/ratings-star.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { CardOwnerProfileComponent } from '@shared/components/card-owner-profile/card-owner-profile.component';
import { CardReviewComponent } from '@shared/components/card-review/card-review.component';
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
export class ProfileComponent {}
