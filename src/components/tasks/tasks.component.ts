import { Component, Input } from '@angular/core';
import { TaskitemComponent } from "../taskitem/taskitem.component";
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Task } from '../../app/core/Models/Task.modules';
import { selectedTask, TasksForUser } from '../../app/core/store/Task/TaskSelector';
import { TaskStatut, TaskType } from '../../app/core/Models/enums/Enums';
import { CommonModule } from '@angular/common';
import { LoadTasksForLoggedUser, SelectTask } from '../../app/core/store/Task/TasksActions';
import { ExtraInformationsTaskItemComponent } from "../extra-informations-task-item/extra-informations-task-item.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskitemComponent, CommonModule, ExtraInformationsTaskItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() type!:TaskStatut;
  @Input() data!:Task[]
  module:boolean = false;

  constructor(private store:Store){

  }

  ngOnInit() : void {
    this.store.select(selectedTask).subscribe((task) => {
      if(task!= null){
        this.module = true;
      }else{
        this.module = false;
      }
    })
  }

  openModule(task:Task) : void {
    this.store.dispatch(SelectTask({task:task}));
  }
  // closeModule() : void {
  //   this.module = false;
  // }
}
