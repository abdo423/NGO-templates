import { Component } from '@angular/core';
import { TranslationService } from '../../../shared/translation/translation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-steps-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './steps-section.component.html',
  styleUrl: './steps-section.component.css'
})
export class StepsSectionComponent {
  steps: any;
  constructor(translationService: TranslationService) {
   // Components
   this.steps = translationService.getTranslation().steps;
 
  }
}
