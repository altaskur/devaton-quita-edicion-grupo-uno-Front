import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { SvgImageComponent } from '@shared/components/svg-image/svg-image.component';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, SvgImageComponent, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  ISAUTH = false;

  searchForm!: FormGroup;

  constructor(
    _fb: FormBuilder,
    private _router: Router
  ) {
    this.searchForm = _fb.group({
      term: [''],
    });
  }

  @ViewChild('navbar') navbar!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.searchForm.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      if (value.term.length >= 2) {
        this._router.navigate(['/search'], {
          queryParams: value,
        });
      }
    });
  }

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
