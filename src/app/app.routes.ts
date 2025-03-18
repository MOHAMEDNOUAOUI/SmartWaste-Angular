import { Routes } from '@angular/router';
import { ClientPageComponent } from '../Layout/client-page/client-page.component';
import { AdminLayoutComponent } from '../Layout/admin-layout/admin-layout.component';
import { AuthentificationLayoutComponent } from '../Layout/authentification-layout/authentification-layout.component';
import { ProfileLayoutComponent } from '../Layout/profile-layout/profile-layout.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { SolutionsPageComponent } from '../pages/solutions-page/solutions-page.component';
import { AdminPageComponent } from '../pages/admin-page/admin-page.component';
import { InboxPageComponent } from '../pages/inbox-page/inbox-page.component';
import { DailytasksComponent } from '../features/dailytasks/dailytasks.component';
import { ComplaintsFeatureComponent } from '../features/complaints-feature/complaints-feature.component';
import { NotificationsPageComponent } from '../pages/notifications-page/notifications-page.component';
import { TrackComponent } from '../pages/track/track.component';
import { TeamsPageComponent } from '../pages/teams-page/teams-page.component';
import { EmployeesFeatureComponent } from '../features/employees-feature/employees-feature.component';
import { UsersFeatureComponent } from '../features/users-feature/users-feature.component';
import { RegisterPageComponent } from '../pages/authentification/register-page/register-page.component';
import { LoginPageComponent } from '../pages/authentification/login-page/login-page.component';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { ReportsPageComponent } from '../pages/reports-page/reports-page.component';
import { roleGuard } from './core/guards/redirect-guard.guard';
import { userGuard } from './core/guards/user-guard-.guard';

export const routes: Routes = [
    // Public Routes for users (excluding Admin/Worker)
    { path: '', component: ClientPageComponent, canActivate: [userGuard], children: [
        { path: '', component: HomePageComponent },
        { path: 'Solutions', component: SolutionsPageComponent }
      ]
    },
  
    // Admin/Worker Routes - Protected by roleGuard
    { path: 'Dashboard', component: AdminLayoutComponent, canActivate: [roleGuard], children: [
        { path: '', component: AdminPageComponent },
        { path: 'Inbox', component: InboxPageComponent, children: [
            { path: 'tasks', component: DailytasksComponent },
            { path: 'complaints', component: ComplaintsFeatureComponent }
          ]
        },
        { path: 'Notifications', component: NotificationsPageComponent },
        { path: 'Track', component: TrackComponent },
        { path: 'Teams', component: TeamsPageComponent, children: [
            { path: 'Employees', component: EmployeesFeatureComponent },
            { path: 'Users', component: UsersFeatureComponent }
          ]
        }
      ]
    },
  
    // Authentication Routes
    { path: 'auth', component: AuthentificationLayoutComponent, children: [
        { path: 'register', component: RegisterPageComponent },
        { path: 'login', component: LoginPageComponent }
      ]
    },
  
    // Profile Routes - Protected by authenticatedGuard
    { path: 'profile', component: ProfileLayoutComponent,children: [
        { path: '', component: ProfilePageComponent },
        { path: 'reports', component: ReportsPageComponent }
      ]
    },
  ];
