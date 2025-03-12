import { Component } from '@angular/core';
import { DailyTaskHolderComponent } from "../../components/daily-task-holder/daily-task-holder.component";
import { DailyTaskLayoutFilterComponent } from "../../components/daily-task-layout-filter/daily-task-layout-filter.component";
import { DailytasksComponent } from "../../features/dailytasks/dailytasks.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inbox-page',
  imports: [DailyTaskLayoutFilterComponent, RouterOutlet],
  templateUrl: './inbox-page.component.html',
  styleUrl: './inbox-page.component.css'
})
export class InboxPageComponent {

}
