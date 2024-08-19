import { Component } from '@angular/core';
import { TranslationService } from '../../shared/translation/translation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact-us-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us-page.component.html',
  styleUrl: './contact-us-page.component.css'
})
export class ContactUsPageComponent {
 contactUs:any;
 constructor (translationService: TranslationService) {
   this.contactUs = translationService.getTranslation().contactUs;
 }
}
