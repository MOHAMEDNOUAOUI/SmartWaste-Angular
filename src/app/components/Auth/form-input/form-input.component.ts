import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {bootstrapEye ,bootstrapEyeSlash} from '@ng-icons/bootstrap-icons';
import {matMailOutline , matLockOutline} from '@ng-icons/material-icons/outline'
import { heroUser } from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-input',
  imports: [NgIcon , CommonModule],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.css',
  viewProviders:[provideIcons({bootstrapEye , bootstrapEyeSlash , matLockOutline , matMailOutline , heroUser})],
})
export class FormInputComponent {
  @Input() icon!:string;
  @Input() text!:string;
  @Input() type!:string;


  ChangeType() : void {
    if(this.type === 'password'){
      this.type = "text";
    }else{
      this.type ='password';
    }
  }

  
}
