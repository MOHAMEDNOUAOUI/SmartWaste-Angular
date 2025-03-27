import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {bootstrapBack} from '@ng-icons/bootstrap-icons'
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { User } from '../../app/core/store/Utilisateur/UserSelector';
import { Observable } from 'rxjs';
import { Utilisateur } from '../../app/core/Models/Utilisateur.modules';

@Component({
  selector: 'app-profiledatacomponent',
  imports: [NgIcon ,RouterLink , CommonModule],
  templateUrl: './profiledatacomponent.component.html',
  styleUrl: './profiledatacomponent.component.css',
  viewProviders:[provideIcons({bootstrapBack})],
})
export class ProfiledatacomponentComponent{
  constructor(private ActiveRoute:ActivatedRoute , public router:Router , private store:Store){}
  user$!:Observable<Utilisateur | null>;
  ngAfterContentInit() :void {
    this.user$ = this.store.select(User);
  }
}
