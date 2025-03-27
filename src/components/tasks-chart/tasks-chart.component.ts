import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadAllTasks } from '../../app/core/store/Task/TasksActions';
import { TasksChartItemComponent } from "../tasks-chart-item/tasks-chart-item.component";
import { TaskStatut } from '../../app/core/Models/enums/Enums';
import { TasksTotal } from '../../app/core/store/Task/TaskSelector';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks-chart',
  imports: [TasksChartItemComponent , CommonModule , RouterLink],
  templateUrl: './tasks-chart.component.html',
  styleUrl: './tasks-chart.component.css'
})
export class TasksChartComponent {
  statutTask = TaskStatut;
  total : number | undefined = 0;
  constructor(private store:Store){}
  ngOnInit() : void {
    this.store.select(TasksTotal).subscribe(total => this.total = total)
  }
}
