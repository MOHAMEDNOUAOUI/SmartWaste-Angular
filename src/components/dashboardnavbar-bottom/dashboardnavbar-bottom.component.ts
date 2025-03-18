import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { Logout } from '../../app/core/store/Auth/AuthActions';

@Component({
  selector: 'app-dashboardnavbar-bottom',
  imports: [NgIcon , CommonModule , RouterLink],
  templateUrl: './dashboardnavbar-bottom.component.html',
  styleUrl: './dashboardnavbar-bottom.component.css'
})
export class DashboardnavbarBottomComponent {
  constructor(private store:Store){}
  logOut() : void {
    this.store.dispatch(Logout())
  }
} 
