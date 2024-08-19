import { Component } from '@angular/core';
import { TranslationService } from '../../../shared/translation/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  features: any;
  constructor(translationService: TranslationService) {
    // Component
    this.features = translationService.getTranslation().featuresSection;
    
   }
}
