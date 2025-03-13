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
        case 0:{
          return 'Blocked'
        }
        case 1:{
          return 'Critical'
        }
        case 2:{
          return 'High'
        }
        case 3:{
          return 'Medium'
        }
        case 4:{
          return 'Low'
        }
        default:{
          return 'No Priority'
        }
      }
    }


  
}
