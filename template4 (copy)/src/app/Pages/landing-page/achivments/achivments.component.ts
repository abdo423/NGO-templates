import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/translation/translation.service';

@Component({
  selector: 'app-achivments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achivments.component.html',
  styleUrl: './achivments.component.css'
})
export class AchivmentsComponent {
  achivments: any;
  constructor(translationService: TranslationService) {
    // Component
    this.achivments = translationService.getTranslation().achivmentsSection;
  
   }
}
