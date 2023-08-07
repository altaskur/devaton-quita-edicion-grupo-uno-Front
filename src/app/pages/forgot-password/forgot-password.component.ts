import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ContainerAuthComponent } from '@shared/components/container-auth/container-auth.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, ContainerAuthComponent, ButtonComponent],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {}
