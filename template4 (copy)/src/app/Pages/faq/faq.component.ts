import { Component, OnInit } from '@angular/core';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { TranslationService } from '../../shared/translation/translation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqSectionComponent,CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
 faqs: any;
  constructor( public translationsService: TranslationService) {
    this.faqs = translationsService.getTranslation().faq;
    
  }
 
}
