import { Component } from '@angular/core';
import { TranslationService } from '../../../shared/translation/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroContent: any;
 constructor(translationService: TranslationService) {
  // Component
  this.heroContent = translationService.getTranslation().hero;

 }
}
