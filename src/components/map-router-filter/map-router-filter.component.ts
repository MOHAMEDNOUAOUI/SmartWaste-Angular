import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Roots } from '../../app/core/Models/Roots.modules';
import { Store } from '@ngrx/store';
import { LoadUserRoutes } from '../../app/core/store/Roots/RoutesActions';
import { routesDate, selecteRoute } from '../../app/core/store/Roots/RootesSelector';
import { RouteComponentComponent } from "../route-component/route-component.component";

@Component({
  selector: 'app-map-router-filter',
  imports: [CommonModule, RouteComponentComponent],
  templateUrl: './map-router-filter.component.html',
  styleUrl: './map-router-filter.component.css'
})
export class MapRouterFilterComponent {
  selectedRoute$!:Observable<Roots | null>;
  Routes$!: Observable<Roots[] | null>;
  constructor(private store:Store){}

  ngOnInit(): void {
    this.store.dispatch(LoadUserRoutes());
    this.Routes$ = this.store.select(routesDate)
    this.selectedRoute$ = this.store.select(selecteRoute);
  }

}
