import { Component } from '@angular/core';
import { FeaturesOne } from '../../../shared/translation/languages/en/FeaturesOne';
import { TranslationService } from '../../../shared/translation/translation.service';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  featuresOne :any;
  constructor(transilationService: TranslationService) {
    this.featuresOne = transilationService.getTranslation().featuresSection;
  }
}
