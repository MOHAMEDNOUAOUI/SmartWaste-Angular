import { Component, Input } from '@angular/core';
import { Roots } from '../../app/core/Models/Roots.modules';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matRoute , matComment ,matDeleteSweep , matFireTruck} from '@ng-icons/material-icons/baseline'
import { RouteiconsComponent } from "../routeicons/routeicons.component";
import { Bins } from '../../app/core/Models/Bins.modules';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selecteRoute } from '../../app/core/store/Roots/RootesSelector';
import { LoadSelectedRoutes, ResetSelectedRoutes } from '../../app/core/store/Roots/RoutesActions';

@Component({
  selector: 'app-route-component',
  imports: [CommonModule, NgIcon, RouteiconsComponent],
  templateUrl: './route-component.component.html',
  styleUrl: './route-component.component.css',
  viewProviders:[provideIcons({matRoute , matComment , matDeleteSweep , matFireTruck})]
})
export class RouteComponentComponent {
  @Input() route!:Roots;
  selectedRoute!:Roots |null;
  constructor(private store:Store){}

  ngOnInit() : void{
    this.store.select(selecteRoute).subscribe((route) => {
      this.selectedRoute = route;
    });
  }

  ComplaintsCount(bins:Bins[]):string {
    const count = bins.reduce((accumulator, bin) => accumulator + (bin.complaintList?.length || 0), 0);
   return count.toString();
  }

  selectRoute(route:Roots){
    if(this.selectedRoute?.id === route.id){
      this.store.dispatch(ResetSelectedRoutes());
    }else{
      this.store.dispatch(LoadSelectedRoutes({ route }));
    }
  }


}
