import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-authentification-layout',
  templateUrl: './authentification-layout.component.html',
  imports:[RouterModule , CommonModule],
  styleUrls: ['./authentification-layout.component.css']
})
export class AuthentificationLayoutComponent implements OnInit {
  isRegister?:string;

  constructor(private activeRouter: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    
  }
}
