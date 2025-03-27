import { Component } from '@angular/core';
import { FormInputComponent } from "../form-input/form-input.component";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../app/core/store/Auth/AuthService';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register',
  imports: [FormInputComponent ,CommonModule , ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  registerForm!:FormGroup;
  submitted : boolean = false;
  constructor(private fromBuilder:FormBuilder , private authService:AuthService  , private router:Router){}
  
  ngOnInit() : void {
    this.registerForm = this.fromBuilder.group({
      username:['' , [Validators.required , Validators.minLength(2) , Validators.maxLength(20)]],
      email:['' , [Validators.required , Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() {
    return this.registerForm.controls;
  } 

  register() :void {
    this.submitted = true;
    
    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);
    
    this.authService.register(this.registerForm.value).subscribe({
      next: (response) => {
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
          icon: "success",
          title: response.message
        }).then(() => {
          this.router.navigate(['/auth/login'])
        });
      },
      error: (err) => {
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
          title: err.error.message
        });
      }
    });
  }


}   
