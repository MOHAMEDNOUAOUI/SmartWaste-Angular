import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {matWater , matReport , matAdUnits , matLabelImportant , matHelp , matQuestionAnswer ,matTrackChanges , matFaceRetouchingNatural} from '@ng-icons/material-icons/baseline'

@Component({
  selector: 'app-question-holder',
  imports: [NgIcon],
  templateUrl: './question-holder.component.html',
  styleUrl: './question-holder.component.css',
  viewProviders:[provideIcons({matWater , matReport , matAdUnits , matLabelImportant , matHelp , matQuestionAnswer , matTrackChanges , matFaceRetouchingNatural})]
})
export class QuestionHolderComponent {
  @Input() question!:string;
  @Input() text!:string;
  @Input() icon!:string;
}
