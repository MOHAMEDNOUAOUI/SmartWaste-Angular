import { Component } from '@angular/core';
import { FormInputComponent } from "../form-input/form-input.component";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../app/core/store/Auth/AuthService';
import { ClearError, Login } from '../../../app/core/store/Auth/AuthActions';
import { AuthState } from '../../../app/core/store/Auth/AuthReducer';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { authError } from '../../../app/core/store/Auth/AuthSelector';

@Component({
  selector: 'app-form-login',
  imports: [FormInputComponent ,CommonModule , ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  loginForm!:FormGroup;
  submitted : boolean = false;
  error$?:Observable<string |null>;
  constructor(private fromBuilder:FormBuilder , private authService:AuthService , private store:Store){
  }
  
  ngOnInit() : void {
    this.loginForm = this.fromBuilder.group({
      email:['' , [Validators.required , Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }


    


  get f() {
    return this.loginForm.controls;
  } 

  login() :void {  
    this.submitted = true;
    
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.store.dispatch(Login({email:this.loginForm.value.email , password:this.loginForm.value.password}));
    
    
    this.store.select(authError).subscribe((error) => {
      if(error != null){
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "error",
          title: error.message
        });

        this.store.dispatch(ClearError());
      }
    })
  }

}
