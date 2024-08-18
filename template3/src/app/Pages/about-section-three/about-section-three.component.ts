import { Component } from '@angular/core';
import { TranslationService } from '../../shared/translation/translation.service';
import {CommonModule} from  '@angular/common'
@Component({
  selector: 'app-about-section-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section-three.component.html',
  styleUrl: './about-section-three.component.css'
})
export class AboutUsSectionThreeComponent {
  aboutUs :any;
  constructor(public translationService:TranslationService){
   this.aboutUs = this.translationService.getTranslation().aboutUs;
  }
}
