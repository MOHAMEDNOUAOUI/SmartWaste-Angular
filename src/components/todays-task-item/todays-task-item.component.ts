import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todays-task-item',
  imports: [CommonModule],
  templateUrl: './todays-task-item.component.html',
  styleUrl: './todays-task-item.component.css'
})
export class TodaysTaskItemComponent {
@Input() text!:string;
@Input() date!:string;
}
