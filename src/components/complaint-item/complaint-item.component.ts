import { Component, Input } from '@angular/core';
import { Complaints } from '../../app/core/Models/Complaints.modules';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-complaint-item',
  imports: [CommonModule , NgIcon],
  templateUrl: './complaint-item.component.html',
  styleUrl: './complaint-item.component.css'
})
export class ComplaintItemComponent {
    @Input() complaint!:Complaints

    complaintString(priority:number) : string {
      switch(priority){
        case 1:{
          return 'High'
        }
        case 2:{
          return 'Medium'
        }
        case 3:{
          return 'Low'
        }
        default:{
          return 'No Priority'
        }
      }
    }
}
