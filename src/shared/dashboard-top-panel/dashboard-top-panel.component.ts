import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Utilisateur } from '../../app/core/Models/Utilisateur.modules';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../../app/core/store/Utilisateur/UserSelector';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-top-panel',
  imports: [AvatarGroupModule , AvatarModule , CommonModule , RouterLink],
  templateUrl: './dashboard-top-panel.component.html',
  styleUrl: './dashboard-top-panel.component.css'
})
export class DashboardTopPanelComponent {
  User$!:Observable<Utilisateur | null>;
  date:Date = new Date()
  constructor(private store:Store){}

  ngOnInit() : void {
    this.User$ = this.store.select(User);
  }
}
