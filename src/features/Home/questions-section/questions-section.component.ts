import { Component } from '@angular/core';
import { QuestionHolderComponent } from "../../../components/question-holder/question-holder.component";

@Component({
  selector: 'app-questions-section',
  imports: [QuestionHolderComponent],
  templateUrl: './questions-section.component.html',
  styleUrl: './questions-section.component.css'
})
export class QuestionsSectionComponent {

}
