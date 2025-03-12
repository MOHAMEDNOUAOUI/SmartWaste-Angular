import { Component } from '@angular/core';
import { MapRouterFilterComponent } from "../../components/map-router-filter/map-router-filter.component";
import { MapComponentForComplaintsComponent } from "../../components/map-component-for-complaints/map-component-for-complaints.component";

@Component({
  selector: 'app-track',
  imports: [MapRouterFilterComponent, MapComponentForComplaintsComponent],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {

}
