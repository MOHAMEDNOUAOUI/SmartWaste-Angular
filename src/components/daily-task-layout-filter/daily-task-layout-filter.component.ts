import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DailyTaskLayoutFilterBoxComponent } from "../daily-task-layout-filter-box/daily-task-layout-filter-box.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matSearchOutline , matFilterListOutline} from '@ng-icons/material-icons/outline'

@Component({
  selector: 'app-daily-task-layout-filter',
  imports: [CommonModule, DailyTaskLayoutFilterBoxComponent , NgIcon],
  templateUrl: './daily-task-layout-filter.component.html',
  styleUrl: './daily-task-layout-filter.component.css',
  viewProviders:[provideIcons({matSearchOutline , matFilterListOutline})]
})
export class DailyTaskLayoutFilterComponent {

}
