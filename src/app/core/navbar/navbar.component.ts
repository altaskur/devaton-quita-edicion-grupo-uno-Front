import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  ISAUTH: boolean = false;

  openMenu() {
    const NAVBAR = document.getElementById('navbar');
    NAVBAR?.classList.remove('hidden');
    NAVBAR?.classList.add('flex');
  }

  closeMenu() {
    const NAVBAR = document.getElementById('navbar');
    NAVBAR?.classList.remove('flex');
    NAVBAR?.classList.add('hidden');
  }

  closeSesion() {
    console.log('Close Sesión');
  }
}
