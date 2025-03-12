import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {bootstrapDot , bootstrapFileArrowDown} from '@ng-icons/bootstrap-icons'
import { TaskStatut } from '../../app/core/Models/enums/Enums';
import { Store } from '@ngrx/store';
import { UpdateTask } from '../../app/core/store/Task/TasksActions';
import { selectedTask } from '../../app/core/store/Task/TaskSelector';
import { take } from 'rxjs';

@Component({
  selector: 'app-extra-infosmall-data-item',
  imports: [CommonModule ,NgIcon],
  templateUrl: './extra-infosmall-data-item.component.html',
  styleUrl: './extra-infosmall-data-item.component.css',
  viewProviders:[provideIcons({bootstrapDot , bootstrapFileArrowDown})]
})
export class ExtraInfosmallDataItemComponent {
  @Input() icon!:string;
  @Input() text!:string;
  @Input() value!:any;
  status = Object.values(TaskStatut);
  constructor(private store:Store){}

  statutOpen:boolean = false;

  returnColor() : string {
    switch(this.value){
      case "To_DO" : {
        return "bg-blue-300 text-blue-700"
        break;
      }
      case "In_Progress" : {
        return 'bg-orange-300 text-orange-700'
        break;
      }
      case "Completed" : {
        return 'bg-green-300 text-green-700'
        break;
      }
      case "Failed" : {
        return 'bg-red-300 text-red-700'
        break;
      }

      default : {
        return 'bg-gray-300 text-gray-700'
        break;
      }
    }
  }

  changeStatut(taskstatut:TaskStatut) : void {
      this.store.select(selectedTask).pipe(
        take(1)
      ).subscribe(task => {
        if(task){
          const updateTask = {...task,taskStatus:taskstatut};
          this.statutOpen = false;
          this.store.dispatch(UpdateTask({task:updateTask}));
        }
      })
  }
}
