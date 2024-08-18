import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../shared/translation/translation.service';

@Component({
  selector: 'app-features-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-three.component.html',
  styleUrl: './features-three.component.css'
})
export class FeaturesThreeComponent {
  services :any;
  constructor(public translationService:TranslationService){
    this.services = this.translationService.getTranslation().featuresSection;
   
  }
}
