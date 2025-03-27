import { Component } from '@angular/core';
import { DahsboardnavitemComponent } from "../dahsboardnavitem/dahsboardnavitem.component";
import { Store } from '@ngrx/store';
import { User } from '../../app/core/store/Utilisateur/UserSelector';
import { Role } from '../../app/core/Models/enums/Enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboardnavholder',
  imports: [DahsboardnavitemComponent , CommonModule],
  templateUrl: './dashboardnavholder.component.html',
  styleUrl: './dashboardnavholder.component.css'
})
export class DashboardnavholderComponent {
  isAdmin:boolean = false;
  role = Role;

  constructor(private store:Store){}
  ngOnInit() : void {
    this.store.select(User).subscribe(user => this.isAdmin = true ? user?.rrole == this.role.ROLE_ADMIN :false);
  }
}
