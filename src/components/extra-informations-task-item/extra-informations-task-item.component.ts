import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matClose , matMoreTime} from "@ng-icons/material-icons/baseline"
import { Task } from '../../app/core/Models/Task.modules';
import { ExtraInfosmallDataItemComponent } from "../extra-infosmall-data-item/extra-infosmall-data-item.component";
import {bootstrapSun} from "@ng-icons/bootstrap-icons"
import {matCheckCircleOutline} from "@ng-icons/material-icons/outline"
import {matDateRange} from '@ng-icons/material-icons/baseline'
import { Store } from '@ngrx/store';
import { selectedTask } from '../../app/core/store/Task/TaskSelector';
import { Observable } from 'rxjs';
import { resetSelectedTask } from '../../app/core/store/Task/TasksActions';




@Component({
  selector: 'app-extra-informations-task-item',
  imports: [CommonModule, NgIcon, ExtraInfosmallDataItemComponent],
  templateUrl: './extra-informations-task-item.component.html',
  styleUrl: './extra-informations-task-item.component.css',
  viewProviders:[provideIcons({matClose , matMoreTime , bootstrapSun , matDateRange, matCheckCircleOutline})]
})
export class ExtraInformationsTaskItemComponent {
  constructor(private store:Store){}
  task$!:Observable<Task| null>;
  ngOnInit() : void {
    this.task$ = this.store.select(selectedTask);
  }

  closeModule() : void {
    this.store.dispatch(resetSelectedTask());
  }
}
