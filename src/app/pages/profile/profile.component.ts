import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsStarComponent } from '@shared/components/ratings-star/ratings-star.component';
import { ButtonComponent } from '@shared/components/button/button.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RatingsStarComponent, ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {}
