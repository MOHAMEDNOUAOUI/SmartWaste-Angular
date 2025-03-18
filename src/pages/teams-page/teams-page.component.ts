import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matAppsOutline} from '@ng-icons/material-icons/outline'
import {ionAtCircleOutline , ionCalendarOutline , ionFlashOutline , ionSyncCircleOutline} from '@ng-icons/ionicons'

@Component({
  selector: 'app-teams-page',
  imports: [NgIcon , CommonModule , RouterOutlet , RouterLink],
  templateUrl: './teams-page.component.html',
  styleUrl: './teams-page.component.css',
  viewProviders:[provideIcons({matAppsOutline , ionAtCircleOutline , ionSyncCircleOutline , ionCalendarOutline , ionFlashOutline})]
})
export class TeamsPageComponent {
active:string = 'Employees';
  constructor(private router:Router){}

  isActive(path: string): boolean {
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }

  changeType(type:string) :void {
    this.active = type;
  }
}
