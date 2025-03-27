import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { StatusComplaint, TaskStatut } from '../../app/core/Models/enums/Enums';
import { TasksCanceledTotal, TasksCompletedTotal, TasksFailedTotal, TasksInProgressTotal, TasksToDoTotal, TasksTotal } from '../../app/core/store/Task/TaskSelector';
import { LoadAllTasks } from '../../app/core/store/Task/TasksActions';
import { Observable } from 'rxjs';
import { ComplaintClosed, ComplaintInProgress, ComplaintPending, ComplaintResolved, selectTotalComplaints } from '../../app/core/store/Complaints/ComplaintSelector';

@Component({
  selector: 'app-tasks-chart-item',
  imports: [],
  templateUrl: './tasks-chart-item.component.html',
  styleUrl: './tasks-chart-item.component.css'
})
export class TasksChartItemComponent {
  @Input() type!: TaskStatut | StatusComplaint;
  total: number | undefined = 0;
  chartDate$!: Observable<number>;
  progress: number = 0; 

  constructor(private store: Store) {}

  ngOnInit(): void {

    if(Object.values(TaskStatut).includes(this.type as TaskStatut)){
      this.store.select(TasksTotal).subscribe(total => {
        this.total = total; 
      });
  
  
      switch (this.type) {
        case TaskStatut.To_DO:
          this.chartDate$ = this.store.select(TasksToDoTotal);
          break;
        case TaskStatut.Cancelled:
          this.chartDate$ = this.store.select(TasksCanceledTotal);
          break;
        case TaskStatut.Failed:
          this.chartDate$ = this.store.select(TasksFailedTotal);
          break;
        case TaskStatut.Completed:
          this.chartDate$ = this.store.select(TasksCompletedTotal);
          break;
        case TaskStatut.In_Progress:
          this.chartDate$ = this.store.select(TasksInProgressTotal);
          break;
      }
    }else if(Object.values(StatusComplaint).includes(this.type as StatusComplaint)){
      this.store.select(selectTotalComplaints).subscribe(total => {
        this.total = total; 
      });
  
  
      switch (this.type) {
        case StatusComplaint.IN_PROGRESS:
          this.chartDate$ = this.store.select(ComplaintInProgress);
          break;
        case StatusComplaint.PENDING:
          this.chartDate$ = this.store.select(ComplaintPending);
          break;
        case StatusComplaint.CLOSED:
          this.chartDate$ = this.store.select(ComplaintClosed);
          break;
        case StatusComplaint.RESOLVED:
          this.chartDate$ = this.store.select(ComplaintResolved);
          break;
      }
    }
   

    this.chartDate$.subscribe(chartTotal => {
      if (this.total && chartTotal) {
        this.progress = (chartTotal / this.total) * 100;
      }
    });
  }
}
