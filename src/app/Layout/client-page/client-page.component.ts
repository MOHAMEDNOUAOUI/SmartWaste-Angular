import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-client-page',
  imports: [NavbarComponent, RouterModule, FooterComponent],
  templateUrl: './client-page.component.html',
  styleUrl: './client-page.component.css'
})
export class ClientPageComponent {
  
}
