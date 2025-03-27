import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DeleteWorker, LoadAllWorkers } from '../../app/core/store/Utilisateur/UserActions';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { Observable } from 'rxjs';
import { AllWorkers } from '../../app/core/store/Utilisateur/UserSelector';
import { Worker } from '../../app/core/Models/Utilisateur.modules';

import { ConfirmPopupModule } from 'primeng/confirmpopup';
import {ButtonModule} from 'primeng/button'
import {ToastModule} from 'primeng/toast'
import { ConfirmationService, MessageService } from 'primeng/api';



@Component({
  selector: 'app-employees-feature',
  imports: [CommonModule , NgIcon , ConfirmPopupModule, ButtonModule , ToastModule],
  providers:[MessageService , ConfirmationService],
  templateUrl: './employees-feature.component.html',
  styleUrl: './employees-feature.component.css'
})
export class EmployeesFeatureComponent {
  Workers$!:Observable<Worker[] | null>;
  constructor(private store: Store, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit():void {
    this.store.dispatch(LoadAllWorkers())
    this.Workers$ = this.store.select(AllWorkers);
  }

  deleteEmployee(event: Event, worker: Worker): void {
    this.confirmationService.confirm({
      target: event.target as HTMLElement | undefined,
      message: `Are you sure you want to delete ${worker.id}?`,
      accept: () => {
        this.store.dispatch(DeleteWorker({ id: worker.id }));
        this.messageService.add({ severity: 'success', summary: 'Deleted', detail: 'Worker deleted successfully' });
      },
    });
  }
}
