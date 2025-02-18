import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientPageComponent } from './Layout/client-page/client-page.component';
import { SolutionsPageComponent } from './pages/solutions-page/solutions-page.component';
import { AdminPageComponent } from './Layout/admin-page/admin-page.component';
import { AdminStatsPageComponent } from './pages/admin-stats-page/admin-stats-page.component';
import { AuthentificationLayoutComponent } from './Layout/authentification-layout/authentification-layout.component';
import { RegisterPageComponent } from './pages/authentification/register-page/register-page.component';
import { LoginPageComponent } from './pages/authentification/login-page/login-page.component';

export const routes: Routes = [
    {path:'' ,component:ClientPageComponent , children:[
        {path:'' , component:HomePageComponent},
        {path:'Solutions' , component:SolutionsPageComponent}
    ]},
    {path:'Dashboard' , component:AdminPageComponent , children:[
        {path:'' , component:AdminStatsPageComponent}
    ]},
    {path:'auth' , component:AuthentificationLayoutComponent ,
        children:[
            {path:'register' , component:RegisterPageComponent},
            {path:'login' , component:LoginPageComponent}
        ]
    }
];
