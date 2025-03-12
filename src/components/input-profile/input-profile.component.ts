import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-input-profile',
  imports: [NgIcon],
  templateUrl: './input-profile.component.html',
  styleUrl: './input-profile.component.css'
})
export class InputProfileComponent {
  @Input() icon!:string;
  @Input() data!:any;
  @Input() title!:string;
}
