import { Component } from '@angular/core';
import { Roots } from '../../app/core/Models/Roots.modules';
import { Store } from '@ngrx/store';
import { selectedComplaint } from '../../app/core/store/Complaints/ComplaintSelector';
import { Observable } from 'rxjs';
import { ResetComplaint } from '../../app/core/store/Complaints/ComplaintActions';
import { Complaints } from '../../app/core/Models/Complaints.modules';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matClose , matMoreTime} from "@ng-icons/material-icons/baseline"
import {bootstrapSun} from "@ng-icons/bootstrap-icons"
import {matCheckCircleOutline} from "@ng-icons/material-icons/outline"
import {matDateRange} from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-extrain-informations-complaints-item',
  imports: [NgIcon , CommonModule],
  templateUrl: './extrain-informations-complaints-item.component.html',
  styleUrl: './extrain-informations-complaints-item.component.css',
  viewProviders:[provideIcons({matClose , matMoreTime , bootstrapSun , matDateRange, matCheckCircleOutline})]
})
export class ExtrainInformationsComplaintsItemComponent {

 constructor(private store:Store){}
  roots$!:Observable<Complaints| null>;

  ngOnInit() : void {
    this.roots$ = this.store.select(selectedComplaint);
  }

  closeModule() : void {
    this.store.dispatch(ResetComplaint());
  }
}
