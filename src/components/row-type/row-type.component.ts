import { Component, Input } from '@angular/core';
import { RowtypefilterComponent } from "../rowtypefilter/rowtypefilter.component";
import { TasksComponent } from "../tasks/tasks.component";
import { Role, TaskStatut } from '../../app/core/Models/enums/Enums';
import { map, Observable } from 'rxjs';
import { Task } from '../../app/core/Models/Task.modules';
import { Store } from '@ngrx/store';
import { LoadTasksForLoggedUser } from '../../app/core/store/Task/TasksActions';
import { TasksForUser } from '../../app/core/store/Task/TaskSelector';
import { CommonModule } from '@angular/common';
import { UserRole } from '../../app/core/store/Utilisateur/UserSelector';

@Component({
  selector: 'app-row-type',
  imports: [RowtypefilterComponent, TasksComponent , CommonModule],
  templateUrl: './row-type.component.html',
  styleUrl: './row-type.component.css'
})
export class RowTypeComponent {
  @Input() Icon!:string;
  @Input() type!:TaskStatut;
  @Input() color!:string;

  tasks$!: Observable<Task[] |null>;
  statut = TaskStatut;


  constructor(private store:Store) {
    
  }

  ngOnInit() : void {
    this.tasks$ = this.store.select(TasksForUser).pipe(
      map(tasks => tasks ? tasks.filter(task => task.taskStatus == this.type) : [])
    );
  }

  // ngAfterViewInit() : void {
    
   
  // }

}
