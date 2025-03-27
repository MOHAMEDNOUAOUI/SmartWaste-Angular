import { Component } from '@angular/core';
import { StatistiqueHolderComponent } from "../../features/statistique-holder/statistique-holder.component";
import { TodaysTasksComponent } from "../../features/todays-tasks/todays-tasks.component";
import {ButtonModule} from 'primeng/button'
import { TasksChartComponent } from "../../components/tasks-chart/tasks-chart.component";
import { TasksChartSecondComponent } from "../../components/tasks-chart-second/tasks-chart-second.component";


import {matKeyboardArrowRight} from '@ng-icons/material-icons/baseline'
import { provideIcons } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { LoadAllTasks, LoadTasksForLoggedUser } from '../../app/core/store/Task/TasksActions';
import { TasksChartThirdComponent } from "../../components/tasks-chart-third/tasks-chart-third.component";
import { User, UserRole } from '../../app/core/store/Utilisateur/UserSelector';
import { Role } from '../../app/core/Models/enums/Enums';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ComplaintchartsecondComponent } from "../complaintchartsecond/complaintchartsecond.component";
import { LoadAllComplaints, loadComplaint, loadEmployeeComplaint } from '../../app/core/store/Complaints/ComplaintActions';
import { ComplaintClientPageComponent } from "../complaint-client-page/complaint-client-page.component";
import { ComplaintschartComponent } from "../../components/complaintschart/complaintschart.component";
import { UsersChartComponent } from "../../components/users-chart/users-chart.component";

@Component({
  selector: 'app-admin-page',
  imports: [ButtonModule, TasksChartComponent, TasksChartSecondComponent, TasksChartThirdComponent, CommonModule, ComplaintchartsecondComponent, ComplaintClientPageComponent, ComplaintschartComponent, UsersChartComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css',
  viewProviders:[provideIcons({matKeyboardArrowRight})]
})
export class AdminPageComponent {
  userRole$!:Observable<Role | undefined>;
  Role = Role;
  constructor(private store:Store){}
  ngOnInit() : void {
    this.userRole$ = this.store.select(UserRole);
    this.store.select(UserRole).subscribe(role => {
      if(role ==Role.ROLE_ADMIN){
        this.store.dispatch(LoadAllTasks());
        this.store.dispatch(LoadAllComplaints());
      }else if(role==Role.ROLE_WORKER){
        this.store.dispatch(LoadTasksForLoggedUser());
        this.store.dispatch(loadEmployeeComplaint());
      }
    })
    
  }
} 
