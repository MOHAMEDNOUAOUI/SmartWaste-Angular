import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { LoadAllClients, LoadAllWorkers } from '../../app/core/store/Utilisateur/UserActions';
import { ClientsTotal, totalUsers, WorkersTotal } from '../../app/core/store/Utilisateur/UserSelector';
import { combineLatest, map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-chart-third',
  imports: [NgIcon , CommonModule ],
  templateUrl: './tasks-chart-third.component.html',
  styleUrl: './tasks-chart-third.component.css'
})
export class TasksChartThirdComponent {
  total$!: Observable<number>;
  progresClient$!: Observable<number>;
  progressWorkers$!: Observable<number>;


  constructor(private store:Store){}

  ngOnInit() : void {
    this.store.dispatch(LoadAllClients());
    this.store.dispatch(LoadAllWorkers());

    this.total$ = this.store.select(totalUsers);

    this.progresClient$ = combineLatest([
      this.store.select(ClientsTotal),
      this.total$
    ]).pipe(map(([clients, total]) => (total ? (clients * 100) / total : 0)));

    this.progressWorkers$ = combineLatest([
      this.store.select(WorkersTotal),
      this.total$
    ]).pipe(map(([workers, total]) => (total ? (workers * 100) / total : 0)));

    
  }

  getClipPath(progress: number): string {

    const roundedProgress = Math.min(100, Math.max(0, Math.round(progress)));
    

    const angle = (roundedProgress / 100) * 2 * Math.PI;
  
    // Calculate x and y positions based on the angle, and avoid precision issues
    const x = 50 + 50 * Math.cos(angle);
    const y = 50 + 50 * Math.sin(angle);
  
    // Round values to 2 decimal places to avoid excessive precision
    const roundedX = Math.floor(x * 100) / 100;
    const roundedY = Math.floor(y * 100) / 100;
  
    // Return the polygon clip-path with rounded x and y coordinates
    return `polygon(50% 50%, ${roundedX}% ${roundedY}%, 100% 50%, 100% 100%, 0% 100%, 0% 50%, 50% 50%)`;
  }
  
  
}
