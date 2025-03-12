import { Component } from '@angular/core';
import { DailytaskcleanuppanelComponent } from "../dailytaskcleanuppanel/dailytaskcleanuppanel.component";
import { TaskstableComponent } from "../taskstable/taskstable.component";

@Component({
  selector: 'app-daily-task-maintenance',
  imports: [DailytaskcleanuppanelComponent, TaskstableComponent],
  templateUrl: './daily-task-maintenance.component.html',
  styleUrl: './daily-task-maintenance.component.css'
})
export class DailyTaskMAINTENANCEComponent {

}
