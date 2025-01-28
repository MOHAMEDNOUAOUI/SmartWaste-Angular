import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientPageComponent } from './Layout/client-page/client-page.component';
import { SolutionsPageComponent } from './pages/solutions-page/solutions-page.component';
import { AdminPageComponent } from './Layout/admin-page/admin-page.component';
import { AdminStatsPageComponent } from './pages/admin-stats-page/admin-stats-page.component';

export const routes: Routes = [
    {path:'' ,component:ClientPageComponent , children:[
        {path:'' , component:HomePageComponent},
        {path:'Solutions' , component:SolutionsPageComponent}
    ]},
    {path:'Dashboard' , component:AdminPageComponent , children:[
        {path:'Dashboard' , component:AdminStatsPageComponent}
    ]}
];
