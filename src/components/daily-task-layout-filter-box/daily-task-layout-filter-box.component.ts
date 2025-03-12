import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matAppsOutline , matLineWeightOutline , matTimelapseOutline , matCalendarMonthOutline} from '@ng-icons/material-icons/outline'

@Component({
  selector: 'app-daily-task-layout-filter-box',
  imports: [NgIcon , CommonModule , RouterLink],
  templateUrl: './daily-task-layout-filter-box.component.html',
  styleUrl: './daily-task-layout-filter-box.component.css',
  viewProviders:[provideIcons({matAppsOutline , matLineWeightOutline , matCalendarMonthOutline , matTimelapseOutline})]
})
export class DailyTaskLayoutFilterBoxComponent {
  active:string = 'spread';
  constructor(private router:Router){}

  isActive(path: string): boolean {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }

  changeType(type:string) :void {
    this.active = type;
  }
}
