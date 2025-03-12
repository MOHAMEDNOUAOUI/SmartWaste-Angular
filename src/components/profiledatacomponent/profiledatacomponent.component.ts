import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {bootstrapBack} from '@ng-icons/bootstrap-icons'
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profiledatacomponent',
  imports: [NgIcon ,RouterLink , CommonModule],
  templateUrl: './profiledatacomponent.component.html',
  styleUrl: './profiledatacomponent.component.css',
  viewProviders:[provideIcons({bootstrapBack})],
})
export class ProfiledatacomponentComponent {
  constructor(private ActiveRoute:ActivatedRoute , public router:Router){}
}
