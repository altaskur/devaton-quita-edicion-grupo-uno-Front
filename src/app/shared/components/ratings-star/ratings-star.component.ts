import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgImageComponent } from '../svg-image/svg-image.component';

@Component({
  selector: 'app-ratings-star',
  standalone: true,
  imports: [SvgImageComponent, CommonModule],
  template: `
    <div class="flex gap-2">
      <div *ngFor="let star of starCounter; let i = index">
        <app-svg-image
          [width]="16"
          [height]="16"
          *ngIf="rate - i >= 1"
          path="assets/images/star-filled.svg"></app-svg-image>
        <app-svg-image
          [width]="16"
          [height]="16"
          *ngIf="rate - i === 0.5"
          path="assets/images/star-half.svg"></app-svg-image>
        <app-svg-image
          [width]="16"
          [height]="16"
          *ngIf="rate - i <= 0"
          path="assets/images/star-outline.svg"></app-svg-image>
      </div>
    </div>
  `,
})
export class RatingsStarComponent {
  @Input() rating: number = 0;

  constructor() {}

  get starCounter() {
    return new Array(5).fill(0);
  }

  get rate() {
    return Math.round(this.rating * 2) / 2;
  }
}
