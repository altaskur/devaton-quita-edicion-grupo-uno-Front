import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ContainerAuthComponent } from '@shared/components/container-auth/container-auth.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ContainerAuthComponent, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
