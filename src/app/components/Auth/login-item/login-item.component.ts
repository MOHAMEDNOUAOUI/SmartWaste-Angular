import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-item',
  imports: [],
  templateUrl: './login-item.component.html',
  styleUrl: './login-item.component.css'
})
export class LoginItemComponent {
  @Input() Logo!:string;
}
