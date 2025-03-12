import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matArrowForwardIos } from '@ng-icons/material-icons/baseline'
import { matWbSunnyOutline } from '@ng-icons/material-icons/outline'

@Component({
  selector: 'app-dailytaskcleanuppanel',
  imports: [NgIcon , CommonModule],
  templateUrl: './dailytaskcleanuppanel.component.html',
  styleUrl: './dailytaskcleanuppanel.component.css',
  viewProviders:[provideIcons({matArrowForwardIos , matWbSunnyOutline})]
})
export class DailytaskcleanuppanelComponent {
  @Input() icon!:string;
  @Input() text!:string;
  @Input() color!:string;
}
