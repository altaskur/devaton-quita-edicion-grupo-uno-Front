import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SvgImageComponent } from '@shared/components/svg-image/svg-image.component';
import { slideUpDown } from '@core/animations/slide-up-down.animation';
import tailWindConfig from 'tailwindcss/defaultConfig';

function _window(): Window {
  return window;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SvgImageComponent],
  templateUrl: './dashboard.component.html',
  animations: [slideUpDown],
})
export class DashboardComponent implements OnInit {
  showMenu = false;
  mediaQuery: MediaQueryList;

  constructor() {
    // Get tailwind breackpoints
    const { md } = tailWindConfig.theme?.screens as { [key: string]: string };
    this.mediaQuery = _window().matchMedia(`(min-width: ${md})`);
  }

  ngOnInit(): void {
    /**
     * Add Event Listener to Window.
     * When the window make match with media query dispach an event
     */
    this.mediaQuery.addEventListener('change', e => {
      this._mediaQueryChangeHandle(e.target as MediaQueryList);
    });

    // Check mach on load the app
    this._mediaQueryChangeHandle(this.mediaQuery);
  }

  private _mediaQueryChangeHandle(e: MediaQueryList) {
    // if media query matchs show menu always
    e.matches ? (this.showMenu = true) : (this.showMenu = false);
  }
}
