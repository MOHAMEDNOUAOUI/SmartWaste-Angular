import { Component } from '@angular/core';
import { MapRouterFilterComponent } from "../../components/map-router-filter/map-router-filter.component";
import { MapComponentForComplaintsComponent } from "../../components/map-component-for-complaints/map-component-for-complaints.component";
import { Role } from '../../app/core/Models/enums/Enums';
import { Store } from '@ngrx/store';
import { UserRole } from '../../app/core/store/Utilisateur/UserSelector';
import { LoadRoutes, LoadUserRoutes } from '../../app/core/store/Roots/RoutesActions';
import { LoadAllVehicules } from '../../app/core/store/Vehicule/VehiculeActions';

@Component({
  selector: 'app-track',
  imports: [MapRouterFilterComponent, MapComponentForComplaintsComponent],
  templateUrl: './track.component.html',
  styleUrl: './track.component.css'
})
export class TrackComponent {
  role = Role;
  constructor(private store:Store){}

  ngOnInit() {
    this.store.select(UserRole).subscribe(rl =>{
      if(rl == this.role.ROLE_ADMIN){
        this.store.dispatch(LoadRoutes());
      }else{
        this.store.dispatch(LoadUserRoutes());
      }
    })
  }

}
