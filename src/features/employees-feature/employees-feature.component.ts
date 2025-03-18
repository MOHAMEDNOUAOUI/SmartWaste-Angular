import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteWorker, LoadAllWorkers } from '../../app/core/store/Utilisateur/UserActions';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { Observable } from 'rxjs';
import { AllWorkers } from '../../app/core/store/Utilisateur/UserSelector';
import { Worker } from '../../app/core/Models/Utilisateur.modules';

@Component({
  selector: 'app-employees-feature',
  imports: [CommonModule , NgIcon],
  templateUrl: './employees-feature.component.html',
  styleUrl: './employees-feature.component.css'
})
export class EmployeesFeatureComponent {
  Workers$!:Observable<Worker[] | null>;
  constructor(private store:Store){}

  

  ngOnInit():void {
    this.store.dispatch(LoadAllWorkers())
    this.Workers$ = this.store.select(AllWorkers);
  }

  deleteEmployee(worker:Worker):void {
    this.store.dispatch(DeleteWorker({id:worker.id}));
  }
}
