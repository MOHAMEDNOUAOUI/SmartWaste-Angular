import { Component } from '@angular/core';
import { TodaysTaskItemComponent } from "../../components/todays-task-item/todays-task-item.component";

@Component({
  selector: 'app-todays-tasks',
  imports: [TodaysTaskItemComponent],
  templateUrl: './todays-tasks.component.html',
  styleUrl: './todays-tasks.component.css'
})
export class TodaysTasksComponent {

}
