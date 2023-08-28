import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ContainerAuthComponent } from '@shared/components/container-auth/container-auth.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ContainerAuthComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    _fb: FormBuilder,
    private _router: Router,
    private _auth: AuthService
  ) {
    this.form = _fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [''],
    });
  }

  onSubmit() {
    this._auth.login();
    this._router.navigate(['/dashboard']);
  }
}
