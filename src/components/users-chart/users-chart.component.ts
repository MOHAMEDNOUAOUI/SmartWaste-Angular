import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { AllClients, AllWorkers } from '../../app/core/store/Utilisateur/UserSelector';

@Component({
  selector: 'app-users-chart',
  imports: [NgIcon],
  templateUrl: './users-chart.component.html',
  styleUrl: './users-chart.component.css'
})
export class UsersChartComponent {
  @Input() type!:string;
  total : number | undefined = 0;
  constructor(private store:Store){}

  ngOnInit() : void {
    if(this.type == 'USER'){
      this.store.select(AllClients).subscribe(clients => this.total = clients?.length);
    }else if(this.type == 'WORKER'){
      this.store.select(AllWorkers).subscribe(workers => this.total = workers?.length);
    }
  }
}
