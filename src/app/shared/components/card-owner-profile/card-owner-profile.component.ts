import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsStarComponent } from '../ratings-star/ratings-star.component';
import { ButtonComponent } from '../button/button.component';

import { User } from '@core/interfaces/User';
@Component({
  selector: 'app-card-owner-profile',
  standalone: true,
  imports: [CommonModule, RatingsStarComponent, ButtonComponent],
  templateUrl: './card-owner-profile.component.html',
  styleUrls: ['./card-owner-profile.component.css'],
})
export class CardOwnerProfileComponent {
  constructor() {}

  @Input() user!: User;
}
