import { Component, Input } from '@angular/core';
import { Task } from '../../app/core/Models/Task.modules';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matDateRangeOutline} from '@ng-icons/material-icons/outline'
import {cssMenuLeft} from '@ng-icons/css.gg'

@Component({
  selector: 'app-taskitem',
  imports: [CommonModule ,NgIcon],
  templateUrl: './taskitem.component.html',
  styleUrl: './taskitem.component.css',
  viewProviders:[provideIcons({matDateRangeOutline,cssMenuLeft})]
})
export class TaskitemComponent {
  @Input() data!:Task;
}
