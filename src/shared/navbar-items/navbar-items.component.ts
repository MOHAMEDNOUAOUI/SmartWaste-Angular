import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthLogoComponent } from "../../components/Auth/auth-logo/auth-logo.component";

@Component({
  selector: 'app-navbar-items',
  imports: [CommonModule, RouterModule, AuthLogoComponent],
  templateUrl: './navbar-items.component.html',
  styleUrl: './navbar-items.component.css'
})
export class NavbarItemsComponent {

  constructor(private router:Router){}

  isActiveRoute(route:String):boolean {
    return this.router.url === route;
  }
}
