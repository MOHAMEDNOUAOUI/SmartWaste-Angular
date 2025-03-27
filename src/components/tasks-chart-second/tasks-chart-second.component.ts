import { Component } from '@angular/core';
import { TaskStatut } from '../../app/core/Models/enums/Enums';
import { Store } from '@ngrx/store';
import { LoadAllTasks } from '../../app/core/store/Task/TasksActions';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { TasksCompletedTotal, TasksToDoTotal, TasksTotal } from '../../app/core/store/Task/TaskSelector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks-chart-second',
  imports: [NgIcon , RouterLink],
  templateUrl: './tasks-chart-second.component.html',
  styleUrl: './tasks-chart-second.component.css'
})
export class TasksChartSecondComponent {
 statutTask = TaskStatut;
 total:number |undefined = 0;
 completed$!:Observable<number>;
 progress:number = 0;


  constructor(private store:Store){}


  ngOnInit() : void {
    this.store.select(TasksTotal).subscribe(total => this.total = total);
    this.completed$ = this.store.select(TasksCompletedTotal);
    
    this.completed$.subscribe(data => {
      if(this.total && data){
        this.progress =(data * 100) / this.total
      }
    })

  }

  
}
