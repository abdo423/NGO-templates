import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FaqContentComponent } from '../../../shared/Components/faq-content/faq-content.component';
import { TranslationService } from '../../../shared/translation/translation.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,FaqContentComponent], // Remove this line
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs :any;
  constructor(transilationService:TranslationService){
    this.faqs = transilationService.getTranslation().faq;

  }
}
