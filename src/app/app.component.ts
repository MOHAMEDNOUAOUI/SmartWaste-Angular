import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadAuthenticatedUser } from './core/store/Utilisateur/UserActions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SmartWaste';
  constructor(private store:Store){}

  ngOnInit() : void {
    this.store.dispatch(LoadAuthenticatedUser());
  }

}
