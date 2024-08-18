import { Component } from '@angular/core';
import { HeroOne } from '../../../shared/translation/languages/en/HeroOne';
import { TranslationService } from '../../../shared/translation/translation.service';
@Component({
  selector: 'app-hero-one',
  standalone: true,
  imports: [],
  templateUrl: './hero-one.component.html',
  styleUrl: './hero-one.component.css'
})
export class HeroOneComponent {
  translation :any;
  constructor(public translationService: TranslationService) { 
    this.translation = translationService.getTranslation().heroSection;

  }

}
