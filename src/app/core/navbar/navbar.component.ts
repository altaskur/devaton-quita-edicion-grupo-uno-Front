import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SvgImageComponent } from '@shared/components/svg-image/svg-image.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, SvgImageComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  ISAUTH = false;

  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;

  openMenu() {
    this.navbar.nativeElement.classList.remove('hidden');
    this.navbar.nativeElement.classList.add('flex');
  }

  closeMenu() {
    this.navbar.nativeElement.classList.remove('flex');
    this.navbar.nativeElement.classList.add('hidden');
  }

  closeSesion() {
    console.log('Close Sesión');
  }
}
