import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SecondSectionComponent } from "../second-section/second-section.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  isRendred:boolean = false;


  constructor(private cdr:ChangeDetectorRef){}

  ngOnInit() : void {
    setTimeout(() => {
      this.isRendred = true;
      this.cdr.detectChanges();
    } , 1000);
  }





}
