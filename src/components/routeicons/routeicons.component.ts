import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-routeicons',
  imports: [NgIcon , CommonModule],
  templateUrl: './routeicons.component.html',
  styleUrl: './routeicons.component.css'
})
export class RouteiconsComponent {
  @Input() icon!:string;
  @Input() text!:string;
}
