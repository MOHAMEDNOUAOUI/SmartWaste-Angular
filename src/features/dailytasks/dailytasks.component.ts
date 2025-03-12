import { Component, inject, Input } from '@angular/core';
import { RowTypeComponent } from "../../components/row-type/row-type.component";
import { TaskStatut } from '../../app/core/Models/enums/Enums';


@Component({
  selector: 'app-dailytasks',
  imports: [RowTypeComponent],
  templateUrl: './dailytasks.component.html',
  styleUrl: './dailytasks.component.css'
})
export class DailytasksComponent {
  TaskStatut = TaskStatut
}
