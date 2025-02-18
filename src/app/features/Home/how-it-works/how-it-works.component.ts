import { Component } from '@angular/core';
import {GoogleMap} from '@angular/google-maps';
import { MapComponentComponent } from "../../../components/map-component/map-component.component";
import { MapHolderDesignComponent } from "../../../components/map-holder-design/map-holder-design.component";

@Component({
  selector: 'app-how-it-works',
  imports: [MapHolderDesignComponent],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.css'
})
export class HowItWorksComponent {

}
