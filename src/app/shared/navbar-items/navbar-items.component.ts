import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-items',
  imports: [CommonModule , RouterModule],
  templateUrl: './navbar-items.component.html',
  styleUrl: './navbar-items.component.css'
})
export class NavbarItemsComponent {

  constructor(private router:Router){}

  isActiveRoute(route:String):boolean {
    return this.router.url === route;
  }
}
