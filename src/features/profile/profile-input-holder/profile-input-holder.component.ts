import { Component } from '@angular/core';
import { InputProfileComponent } from "../../../components/input-profile/input-profile.component";
import { Observable } from 'rxjs';
import { Utilisateur } from '../../../app/core/Models/Utilisateur.modules';
import { Store } from '@ngrx/store';
import { User } from '../../../app/core/store/Utilisateur/UserSelector';
import { CommonModule } from '@angular/common';
import { Token } from '../../../app/core/store/Auth/AuthSelector';
import { LoadToken } from '../../../app/core/store/Auth/AuthActions';

@Component({
  selector: 'app-profile-input-holder',
  imports: [InputProfileComponent , CommonModule],
  templateUrl: './profile-input-holder.component.html',
  styleUrl: './profile-input-holder.component.css'
})
export class ProfileInputHolderComponent {
  user$!:Observable<Utilisateur | null>;
  constructor(private store:Store){}
  ngOnInit() : void{
   this.user$ = this.store.select(User);
  }
}
