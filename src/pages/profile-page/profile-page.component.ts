import { Component } from '@angular/core';
import { ProfiledatacomponentComponent } from "../../components/profiledatacomponent/profiledatacomponent.component";
import { PersonelInformationsComponent } from "../../components/personel-informations/personel-informations.component";

@Component({
  selector: 'app-profile-page',
  imports: [PersonelInformationsComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {

}
