import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DailyTaskLayoutFilterBoxComponent } from "../daily-task-layout-filter-box/daily-task-layout-filter-box.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matSearchOutline , matFilterListOutline} from '@ng-icons/material-icons/outline'
import { Store } from '@ngrx/store';
import { UserReducer } from '../../app/core/store/Utilisateur/UserReducer';
import { UserRole } from '../../app/core/store/Utilisateur/UserSelector';
import { Role } from '../../app/core/Models/enums/Enums';
import { CreateTaskComponentComponent } from "../create-task-component/create-task-component.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-task-layout-filter',
  imports: [CommonModule, DailyTaskLayoutFilterBoxComponent, NgIcon, CreateTaskComponentComponent],
  templateUrl: './daily-task-layout-filter.component.html',
  styleUrl: './daily-task-layout-filter.component.css',
  viewProviders:[provideIcons({matSearchOutline , matFilterListOutline})]
})
export class DailyTaskLayoutFilterComponent {
  isAdmin:boolean = false;
  role = Role;
  isTasks : boolean = false;
  isComplaints : boolean = false;

  constructor(private store:Store , private router:Router){}
  ngOnInit(): void {
    this.store.select(UserRole).subscribe(re => {
      if(re == this.role.ROLE_ADMIN){
        this.isAdmin=true
      }else{
        this.isAdmin = false
      }
    })
  }

  open() {
    if(this.router.url == '/Dashboard/Inbox/tasks'){
      this.isTasks = true;
    }else{
      this.isComplaints = true;
    }
  }
  close() {
    if(this.router.url == '/Dashboard/Inbox/tasks'){
      this.isTasks = false;
    }else{
      this.isComplaints = false;
    }
  }
}
