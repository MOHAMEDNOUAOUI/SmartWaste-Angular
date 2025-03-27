import { Component } from '@angular/core';
import { StatusComplaint } from '../../app/core/Models/enums/Enums';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllComplaints, selectCompletedComplaints, selectTotalComplaints } from '../../app/core/store/Complaints/ComplaintSelector';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-complaintchartsecond',
  imports: [CommonModule , NgIcon],
  templateUrl: './complaintchartsecond.component.html',
  styleUrl: './complaintchartsecond.component.css'
})
export class ComplaintchartsecondComponent {
 statutTask = StatusComplaint;
 total:number |undefined = 0;
 completed$!:Observable<number>;
 progress:number = 0;


  constructor(private store:Store){}


  ngOnInit() : void {
    this.store.select(selectTotalComplaints).subscribe(complaints => this.total = complaints);
    this.completed$ = this.store.select(selectCompletedComplaints);
    
    this.completed$.subscribe(data => {
      if(this.total && data){
        this.progress =(data * 100) / this.total
      }
    })

  }
}
