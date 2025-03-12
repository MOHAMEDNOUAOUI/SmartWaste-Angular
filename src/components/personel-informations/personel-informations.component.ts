import { Component } from '@angular/core';
import { PersonelInformationsHeaderComponent } from "../personel-informations-header/personel-informations-header.component";
import { ProfileInputHolderComponent } from '../../features/profile/profile-input-holder/profile-input-holder.component';

@Component({
  selector: 'app-personel-informations',
  imports: [PersonelInformationsHeaderComponent , ProfileInputHolderComponent],
  templateUrl: './personel-informations.component.html',
  styleUrl: './personel-informations.component.css'
})
export class PersonelInformationsComponent {

}
