import { Component, inject, Input } from '@angular/core';
import { RowTypeComponent } from "../../components/row-type/row-type.component";
import { Role, TaskStatut } from '../../app/core/Models/enums/Enums';
import { Store } from '@ngrx/store';
import { LoadAllTasks, LoadTasksForLoggedUser } from '../../app/core/store/Task/TasksActions';
import { UserRole } from '../../app/core/store/Utilisateur/UserSelector';


@Component({
  selector: 'app-dailytasks',
  imports: [RowTypeComponent],
  templateUrl: './dailytasks.component.html',
  styleUrl: './dailytasks.component.css'
})
export class DailytasksComponent {
  TaskStatut = TaskStatut
   role = Role;

  constructor(private store:Store){}


  ngOnInit() : void {
    this.store.select(UserRole).subscribe(re => {
          if(re == this.role.ROLE_ADMIN){
            this.store.dispatch(LoadAllTasks());
          }else if(re == this.role.ROLE_WORKER){
            this.store.dispatch(LoadTasksForLoggedUser());
          }
        })
  }


}
