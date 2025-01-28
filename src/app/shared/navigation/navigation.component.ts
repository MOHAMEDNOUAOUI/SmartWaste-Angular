import { Component } from '@angular/core';
import { NavbarItemsComponent } from "../navbar-items/navbar-items.component";

@Component({
  selector: 'app-navigation',
  imports: [NavbarItemsComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
