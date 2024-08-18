import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FaqContentComponent } from '../../shared/Components/faqContent/faq-content/faq-content.component';
import { faqContent } from '../../shared/translation/languages/en/FaqOne';
import { TranslationService } from '../../shared/translation/translation.service';
@Component({
  selector: 'app-faq-one',
  standalone: true,
  imports: [CommonModule,RouterLink,FaqContentComponent],
  templateUrl: './faq-one.component.html',
  styleUrl: './faq-one.component.css',
})
export class FaqOneComponent {

  faqContent: any;
  constructor(transilationService: TranslationService) {
    this.faqContent = transilationService.getTranslation().faqSection;
  }
 
}
