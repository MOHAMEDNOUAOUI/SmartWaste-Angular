import { Routes } from '@angular/router';
import { ClientPageComponent } from '../Layout/client-page/client-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { SolutionsPageComponent } from '../pages/solutions-page/solutions-page.component';
import { AdminLayoutComponent } from '../Layout/admin-layout/admin-layout.component';
import { AdminPageComponent } from '../pages/admin-page/admin-page.component';
import { InboxPageComponent } from '../pages/inbox-page/inbox-page.component';
import { AuthentificationLayoutComponent } from '../Layout/authentification-layout/authentification-layout.component';
import { ReportsPageComponent } from '../pages/reports-page/reports-page.component';
import { LoginPageComponent } from '../pages/authentification/login-page/login-page.component';
import { ProfileLayoutComponent } from '../Layout/profile-layout/profile-layout.component';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { NotificationsPageComponent } from '../pages/notifications-page/notifications-page.component';
import { RegisterPageComponent } from '../pages/authentification/register-page/register-page.component';
import { authenticatedGuard, redirectGuardGuard } from './core/guards/redirect-guard.guard';
import { DailytasksComponent } from '../features/dailytasks/dailytasks.component';
import { ComplaintsFeatureComponent } from '../features/complaints-feature/complaints-feature.component';
import { TrackComponent } from '../pages/track/track.component';


export const routes: Routes = [
    {path:'' ,component:ClientPageComponent ,  children:[
        {path:'' , component:HomePageComponent},
        {path:'Solutions' , component:SolutionsPageComponent}
    ]},
    {path:'Dashboard' , component:AdminLayoutComponent , children:[
        {path:'' , component:AdminPageComponent},
        {path:'Inbox' , component:InboxPageComponent , children:[
            {path:'tasks' , component:DailytasksComponent},
            {path:'complaints' , component:ComplaintsFeatureComponent}
        ]},
        {path:'Notifications' , component:NotificationsPageComponent},
        {path:'Track' , component:TrackComponent}
    ]},
    {path:'auth' , component:AuthentificationLayoutComponent ,
        children:[
            {path:'register' , component:RegisterPageComponent},
            {path:'login' , component:LoginPageComponent}
        ]
    },
    {path:'profile' , component:ProfileLayoutComponent , canActivate:[authenticatedGuard], children:[
        {path:'' , component:ProfilePageComponent},
        {path:'reports' , component:ReportsPageComponent}
    ]}
];
