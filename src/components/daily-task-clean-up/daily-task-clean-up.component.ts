import { Component } from '@angular/core';
import { DailytaskcleanuppanelComponent } from "../dailytaskcleanuppanel/dailytaskcleanuppanel.component";
import { TaskstableComponent } from "../taskstable/taskstable.component";

@Component({
  selector: 'app-daily-task-clean-up',
  imports: [DailytaskcleanuppanelComponent, TaskstableComponent],
  templateUrl: './daily-task-clean-up.component.html',
  styleUrl: './daily-task-clean-up.component.css'
})
export class DailyTaskCleanUPComponent {

}
