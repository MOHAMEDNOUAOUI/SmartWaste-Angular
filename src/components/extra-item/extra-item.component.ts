import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matFilterVintage , matDateRange} from "@ng-icons/material-icons/baseline"
import {heroUserGroup , heroSquare3Stack3d , heroFlag , heroPaperAirplane} from '@ng-icons/heroicons/outline'
import { Store } from '@ngrx/store';
import { StatusComplaint } from '../../app/core/Models/enums/Enums';

@Component({
  selector: 'app-extra-item',
  imports: [NgIcon , CommonModule],
  templateUrl: './extra-item.component.html',
  styleUrl: './extra-item.component.css',
  viewProviders:[provideIcons({matFilterVintage , heroUserGroup , heroPaperAirplane , heroFlag , matDateRange , heroSquare3Stack3d})]
})
export class ExtraItemComponent {
  @Input() icon!:string;
    @Input() text!:string;
    @Input() value!:any;
    status = Object.values(StatusComplaint);
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
}
