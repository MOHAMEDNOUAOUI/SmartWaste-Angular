import { Component } from '@angular/core';
import { FormInputComponent } from "../form-input/form-input.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [FormInputComponent ,NgIcon , RouterLink],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {

}
