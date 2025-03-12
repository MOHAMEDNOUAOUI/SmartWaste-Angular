import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-dahsboardnavitem',
  imports: [NgIcon , CommonModule , RouterLink],
  templateUrl: './dahsboardnavitem.component.html',
  styleUrl: './dahsboardnavitem.component.css'
})
export class DahsboardnavitemComponent {
  @Input() icon!:string;
  @Input() text!:string;
  @Input() url!:string;
  
  constructor(public router:Router){}


  isActive(url: string): boolean {
    const currentUrl = this.router.url;

    if (url === 'Dashboard') {
        return currentUrl === '/Dashboard';
    }
    
    // If the URL is "/Dashboard/Inbox/tasks" or any child path of "/Dashboard/Inbox", make it active
    if (url === 'Dashboard/Inbox/tasks') {
        return currentUrl.startsWith('/Dashboard/Inbox');
    }

    return currentUrl.startsWith('/' + url);
}

}
