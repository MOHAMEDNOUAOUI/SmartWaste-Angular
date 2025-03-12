import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../features/Home/hero-section/hero-section.component";
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { SecondSectionComponent } from "../../features/Home/second-section/second-section.component";
import { HowItWorksComponent } from "../../features/Home/how-it-works/how-it-works.component";
import { QuestionsSectionComponent } from "../../features/Home/questions-section/questions-section.component";
import { GetStartedComponent } from "../../features/Home/get-started/get-started.component";

@Component({
  selector: 'app-home-page',
  imports: [HeroSectionComponent, SecondSectionComponent, HowItWorksComponent, QuestionsSectionComponent, GetStartedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
