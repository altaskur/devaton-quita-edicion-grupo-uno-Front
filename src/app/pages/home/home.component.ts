import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { RatingsStarComponent } from '@shared/components/ratings-star/ratings-star.component';
import { SvgImageComponent } from '@shared/components/svg-image/svg-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, SvgImageComponent, RatingsStarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
