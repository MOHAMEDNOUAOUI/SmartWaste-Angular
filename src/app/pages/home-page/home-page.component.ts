import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../features/Home/hero-section/hero-section.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SecondSectionComponent } from "../../features/Home/second-section/second-section.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, NavbarComponent, SecondSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
