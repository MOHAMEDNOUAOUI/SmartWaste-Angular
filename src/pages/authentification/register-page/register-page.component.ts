import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LogoComponent } from "../../../components/logo/logo.component";
import { AuthLogoComponent } from "../../../components/Auth/auth-logo/auth-logo.component";
import { LogTextComponent } from "../../../components/Auth/log-text/log-text.component";
import { LoginExternComponent } from "../../../components/Auth/login-extern/login-extern.component";
import { RegTextComponent } from "../../../components/Auth/reg-text/reg-text.component";
import { FormRegisterComponent } from "../../../components/Auth/form-register/form-register.component";

@Component({
  selector: 'app-register-page',
  imports: [RouterModule, AuthLogoComponent, RegTextComponent, FormRegisterComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  constructor(private route:Router){}
}
