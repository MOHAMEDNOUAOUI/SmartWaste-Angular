import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StatusComplaint } from '../../app/core/Models/enums/Enums';
import { Roots } from '../../app/core/Models/Roots.modules';
import { Observable } from 'rxjs';
import { loadEmployeeComplaint } from '../../app/core/store/Complaints/ComplaintActions';
import { Store } from '@ngrx/store';
import { selectAllComplaints } from '../../app/core/store/Complaints/ComplaintSelector';
import { Complaints } from '../../app/core/Models/Complaints.modules';
import { RowtypefilterComponent } from "../rowtypefilter/rowtypefilter.component";
import { ComplaintsComponent } from "../complaints/complaints.component";

@Component({
  selector: 'app-rowtypecomplaints',
  imports: [CommonModule, RowtypefilterComponent, ComplaintsComponent],
  templateUrl: './rowtypecomplaints.component.html',
  styleUrl: './rowtypecomplaints.component.css'
})
export class RowtypecomplaintsComponent {
  @Input() Icon!:string;
  @Input() type!:StatusComplaint;
  @Input() color!:string;

  complaintsList!: Complaints[] |null;
  statut = StatusComplaint;

  constructor(private store:Store) {
      
    }
  
  ngOnInit() : void {
      this.store.dispatch(loadEmployeeComplaint());
  }

  ngAfterViewInit() : void {
    this.store.select(selectAllComplaints).subscribe((complaints) => {
      if(complaints){
       this.complaintsList = complaints.filter(complaint => complaint.status === this.type)
      }
    })
  }

}
