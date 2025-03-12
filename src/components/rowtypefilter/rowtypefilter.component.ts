import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matPlusOutline, matPendingActionsOutline , matWbSunnyOutline } from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-rowtypefilter',
  standalone: true,
  imports: [NgIcon , CommonModule],
  templateUrl: './rowtypefilter.component.html',
  styleUrl: './rowtypefilter.component.css',
  viewProviders: [provideIcons({ matPlusOutline, matPendingActionsOutline , matWbSunnyOutline })]
})
export class RowtypefilterComponent {
  @Input() type!:string;
  @Input() Icon!: string;
  @Input() color!:string;
  @Input() count!:number;
}
