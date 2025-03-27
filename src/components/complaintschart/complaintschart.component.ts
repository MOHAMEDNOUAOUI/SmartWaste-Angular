import { Component } from '@angular/core';
import { TasksChartItemComponent } from "../tasks-chart-item/tasks-chart-item.component";
import { StatusComplaint } from '../../app/core/Models/enums/Enums';
import { Store } from '@ngrx/store';
import { selectTotalComplaints } from '../../app/core/store/Complaints/ComplaintSelector';

@Component({
  selector: 'app-complaintschart',
  imports: [TasksChartItemComponent],
  templateUrl: './complaintschart.component.html',
  styleUrl: './complaintschart.component.css'
})
export class ComplaintschartComponent {
 statutTask = StatusComplaint;
  total : number | undefined = 0;
  constructor(private store:Store){}
  ngOnInit() : void {
    this.store.select(selectTotalComplaints).subscribe(total => this.total = total)
  }
}
