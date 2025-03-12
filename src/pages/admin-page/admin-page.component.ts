import { Component } from '@angular/core';
import { StatistiqueHolderComponent } from "../../features/statistique-holder/statistique-holder.component";
import { TodaysTasksComponent } from "../../features/todays-tasks/todays-tasks.component";

@Component({
  selector: 'app-admin-page',
  imports: [StatistiqueHolderComponent, TodaysTasksComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
