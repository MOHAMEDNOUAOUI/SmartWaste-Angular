import { Component } from '@angular/core';
import { MapComponentForComplaintsComponent } from "../../components/map-component-for-complaints/map-component-for-complaints.component";
import { Store } from '@ngrx/store';
import { LoadUserRoutes } from '../../app/core/store/Roots/RoutesActions';
import { Observable } from 'rxjs';
import { Roots } from '../../app/core/Models/Roots.modules';
import { routesDate, selecteRoute } from '../../app/core/store/Roots/RootesSelector';
import { CommonModule } from '@angular/common';
import { MapRouterFilterComponent } from "../../components/map-router-filter/map-router-filter.component";
import { RowTypeComponent } from "../../components/row-type/row-type.component";
import { Role, StatusComplaint } from '../../app/core/Models/enums/Enums';
import { RowtypecomplaintsComponent } from "../../components/rowtypecomplaints/rowtypecomplaints.component";
import { LoadAllComplaints, loadComplaint, loadEmployeeComplaint } from '../../app/core/store/Complaints/ComplaintActions';
import { UserRole } from '../../app/core/store/Utilisateur/UserSelector';


@Component({
  selector: 'app-complaints-feature',
  imports: [CommonModule, RowtypecomplaintsComponent],
  templateUrl: './complaints-feature.component.html',
  styleUrl: './complaints-feature.component.css'
})
export class ComplaintsFeatureComponent {
  constructor(private store:Store){}
  statut = StatusComplaint;
  role = Role;

  ngOnInit() : void {
    this.store.select(UserRole).subscribe(re => {
      if(re == this.role.ROLE_ADMIN){
        this.store.dispatch(LoadAllComplaints());
      }else if(re == this.role.ROLE_WORKER){
        this.store.dispatch(loadEmployeeComplaint());
      }
    })
  }

}
