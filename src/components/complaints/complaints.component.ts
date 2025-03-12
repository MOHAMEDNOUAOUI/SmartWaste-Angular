import { Component, Input } from '@angular/core';
import { Complaints } from '../../app/core/Models/Complaints.modules';
import { CommonModule } from '@angular/common';
import { ComplaintItemComponent } from "../complaint-item/complaint-item.component";
import { Store } from '@ngrx/store';
import { selectedComplaint } from '../../app/core/store/Complaints/ComplaintSelector';
import { ExtrainInformationsComplaintsItemComponent } from "../extrain-informations-complaints-item/extrain-informations-complaints-item.component";
import { SelectComplaint } from '../../app/core/store/Complaints/ComplaintActions';

@Component({
  selector: 'app-complaints',
  imports: [CommonModule, ComplaintItemComponent, ExtrainInformationsComplaintsItemComponent],
  templateUrl: './complaints.component.html',
  styleUrl: './complaints.component.css'
})
export class ComplaintsComponent {
  @Input() data!:Complaints[];
  module:boolean = false;

   constructor(private store:Store){
  
    }
  
    ngOnInit() : void {
      this.store.select(selectedComplaint).subscribe((complaint) => {
        if(complaint!= null){
          this.module = true;
        }else{
          this.module = false;
        }
      })
    }

    openModule(complaint:Complaints) : void {
        this.store.dispatch(SelectComplaint({complaint:complaint}));
     }
}
