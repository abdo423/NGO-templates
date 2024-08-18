import { Component } from '@angular/core';
import {CommonModule} from  '@angular/common'
import { TranslationService } from '../../../shared/translation/translation.service';

@Component({
  selector: 'app-contact-us-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us-three.component.html',
  styleUrl: './contact-us-three.component.css'
})
export class ContactUsThreeComponent {
 contactUs :any;
 constructor(public translationService:TranslationService){
  this.contactUs = this.translationService.getTranslation().contactUs;
 }
}
