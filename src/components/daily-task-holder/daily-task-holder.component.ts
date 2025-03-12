import { Component } from '@angular/core';
import { DailyTaskCleanUPComponent } from "../daily-task-clean-up/daily-task-clean-up.component";
import { DailyTaskMAINTENANCEComponent } from "../daily-task-maintenance/daily-task-maintenance.component";
import { DailyTaskPanelComponent } from "../daily-task-panel/daily-task-panel.component";
import { AuthentificationLayoutComponent } from "../../Layout/authentification-layout/authentification-layout.component";
import { DailyTaskLayoutFilterComponent } from "../daily-task-layout-filter/daily-task-layout-filter.component";
import { DailytaskcleanuppanelComponent } from "../dailytaskcleanuppanel/dailytaskcleanuppanel.component";
import { DailytasksComponent } from "../../features/dailytasks/dailytasks.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-daily-task-holder',
  imports: [DailytasksComponent],
  templateUrl: './daily-task-holder.component.html',
  styleUrl: './daily-task-holder.component.css'
})
export class DailyTaskHolderComponent {

}
