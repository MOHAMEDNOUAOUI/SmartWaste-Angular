import { Component } from '@angular/core';
import { DashboardWorkerPanelComponent } from "../../shared/dashboard-worker-panel/dashboard-worker-panel.component";
import { RouterOutlet } from '@angular/router';
import {heroHome , heroInbox , heroUserGroup , heroTruck, heroBellAlert , heroArrowLeftStartOnRectangle , heroQuestionMarkCircle} from '@ng-icons/heroicons/outline';
import { matNotificationsActiveOutline } from '@ng-icons/material-icons/outline';
import { provideIcons} from '@ng-icons/core';
import {matWork , matError , matAssignment} from '@ng-icons/material-icons/baseline'
import { Store } from '@ngrx/store';
import { LoadAuthenticatedUser } from '../../app/core/store/Utilisateur/UserActions';
import { LoadToken } from '../../app/core/store/Auth/AuthActions';
import { DashboardTopPanelComponent } from "../../shared/dashboard-top-panel/dashboard-top-panel.component";

@Component({
  selector: 'app-admin-layout',
  imports: [DashboardWorkerPanelComponent, RouterOutlet, DashboardTopPanelComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
  viewProviders:[provideIcons({heroHome , matAssignment , matError , matWork , heroInbox , heroBellAlert , matNotificationsActiveOutline , heroUserGroup , heroTruck , heroArrowLeftStartOnRectangle , heroQuestionMarkCircle})]
})
export class AdminLayoutComponent {
  constructor(private store:Store){
    this.store.dispatch(LoadAuthenticatedUser());
    this.store.dispatch(LoadToken());
  }
}
