import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileNavComponent } from "../../shared/profile-nav/profile-nav.component";
import { ProfiledatacomponentComponent } from "../../components/profiledatacomponent/profiledatacomponent.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matArrowBack , matPhoneAndroid , matAttachEmail , matCake} from '@ng-icons/material-icons/baseline'
import { GoBakcComponent } from "../../components/go-bakc/go-bakc.component";
import {circumEdit} from '@ng-icons/circum-icons'
import { Store } from '@ngrx/store';
import { LoadToken } from '../../app/core/store/Auth/AuthActions';

@Component({
  selector: 'app-profile-layout',
  imports: [RouterModule, CommonModule, ProfiledatacomponentComponent, GoBakcComponent],
  templateUrl: './profile-layout.component.html',
  styleUrl: './profile-layout.component.css',
  viewProviders:[provideIcons({matArrowBack , circumEdit , matPhoneAndroid , matAttachEmail , matCake})]
})
export class ProfileLayoutComponent {
  constructor(private store:Store){
    this.store.dispatch(LoadToken());
  }
}
