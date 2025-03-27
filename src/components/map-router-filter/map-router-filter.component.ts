import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Roots } from '../../app/core/Models/Roots.modules';
import { Store } from '@ngrx/store';
import { LoadUserRoutes } from '../../app/core/store/Roots/RoutesActions';
import { routesDate, selecteRoute } from '../../app/core/store/Roots/RootesSelector';
import { RouteComponentComponent } from "../route-component/route-component.component";
import { CreateRouteComponent } from "../create-route/create-route.component";
import { CreateVehiculeComponent } from "../create-vehicule/create-vehicule.component";
import { Role } from '../../app/core/Models/enums/Enums';
import { UserRole } from '../../app/core/store/Utilisateur/UserSelector';

@Component({
  selector: 'app-map-router-filter',
  imports: [CommonModule, RouteComponentComponent, CreateRouteComponent, CreateVehiculeComponent],
  templateUrl: './map-router-filter.component.html',
  styleUrl: './map-router-filter.component.css'
})
export class MapRouterFilterComponent {
  isOpen:boolean = false;
  isOpenVehicule:boolean = false;
  role!:Role |undefined;
  rl = Role


  selectedRoute$!:Observable<Roots | null>;
  Routes$!: Observable<Roots[] | null>;
  constructor(private store:Store){}

  ngOnInit(): void {
    this.Routes$ = this.store.select(routesDate)
    this.store.select(UserRole).subscribe(role => this.role = role);
    this.selectedRoute$ = this.store.select(selecteRoute);
  }

  open() {
    this.isOpen = true;
  }
  openVehicule() {
    this.isOpenVehicule = true;
  }
  close() {
    this.isOpen = false
  }
  closeVehicule() {
    this.isOpenVehicule = false;
  }
}
