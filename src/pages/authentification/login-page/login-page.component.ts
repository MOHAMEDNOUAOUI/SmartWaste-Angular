import { Component } from '@angular/core';
import { AuthLogoComponent } from "../../../components/Auth/auth-logo/auth-logo.component";
import { LogTextComponent } from "../../../components/Auth/log-text/log-text.component";
import { LoginExternComponent } from "../../../components/Auth/login-extern/login-extern.component";
import { RouterLink } from '@angular/router';
import { FormLoginComponent } from '../../../components/Auth/form-login/form-login.component';

@Component({
  selector: 'app-login-page',
  imports: [AuthLogoComponent, LogTextComponent, FormLoginComponent , RouterLink],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
