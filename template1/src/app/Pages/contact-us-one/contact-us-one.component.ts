import { Component } from '@angular/core';
import { CONTACT_FORM_TEXT } from '../../shared/translation/languages/en/ContactUsOne';
import { TranslationService } from '../../shared/translation/translation.service';

@Component({
  selector: 'app-contact-us-one',
  standalone: true,
  imports: [],
  templateUrl: './contact-us-one.component.html',
  styleUrl: './contact-us-one.component.css'
})
export class ContactUsOneComponent {
  text :any;
  constructor(transilationService: TranslationService){
    this.text = transilationService.getTranslation().contactSection;
  }
}
