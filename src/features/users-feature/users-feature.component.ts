import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Client } from '../../app/core/Models/Utilisateur.modules';
import { DeleteClient, Hire, LoadAllClients } from '../../app/core/store/Utilisateur/UserActions';
import { AllClients } from '../../app/core/store/Utilisateur/UserSelector';

@Component({
  selector: 'app-users-feature',
  imports: [NgIcon , CommonModule],
  templateUrl: './users-feature.component.html',
  styleUrl: './users-feature.component.css'
})
export class UsersFeatureComponent {
  Clients$!:Observable<Client[] | null>;
  constructor(private store:Store){}

  

  ngOnInit():void {
    this.store.dispatch(LoadAllClients())
    this.Clients$ = this.store.select(AllClients);
  }

  deleteClient(client:Client):void {
    this.store.dispatch(DeleteClient({id:client.id}));
  }

  Hire(client:Client) {
    this.store.dispatch(Hire({client:client}))
  }
}
