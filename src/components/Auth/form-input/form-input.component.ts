import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {heroUser} from '@ng-icons/heroicons/outline';
import {matMailOutline} from '@ng-icons/material-icons/baseline';
import {matLockOutline} from '@ng-icons/material-icons/outline'
import {bootstrapEye , bootstrapEyeSlash} from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  imports:[CommonModule , NgIcon , ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ],
  viewProviders:[provideIcons({heroUser , matMailOutline , matLockOutline , bootstrapEyeSlash , bootstrapEye})]
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() icon!: string;
  @Input() text!: string;
  @Input() type!: string;
  
  value: string = '';
  isDisabled: boolean = false;
  isPasswordVisible: boolean = false;

  get inputType(): string {
    return this.isPasswordVisible && this.type === 'password' ? 'text' : this.type;
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  updateValue(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
    this.onChange(inputValue); // Notify Angular form control of the change
  }

  togglePassword(): void {
    if (this.type === 'password') {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  }
}
