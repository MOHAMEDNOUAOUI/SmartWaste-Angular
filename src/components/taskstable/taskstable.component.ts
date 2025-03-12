import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { matAssessmentOutline , matOutlinedFlagOutline , matDescriptionOutline , matUpdateOutline , matCategoryOutline} from '@ng-icons/material-icons/outline'

@Component({
  selector: 'app-taskstable',
  imports: [NgIcon],
  templateUrl: './taskstable.component.html',
  styleUrl: './taskstable.component.css',
  viewProviders:[provideIcons({matAssessmentOutline , matOutlinedFlagOutline , matUpdateOutline , matDescriptionOutline , matCategoryOutline})]
})
export class TaskstableComponent {

}
