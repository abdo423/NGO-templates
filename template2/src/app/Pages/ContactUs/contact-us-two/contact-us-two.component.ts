import { Component } from '@angular/core';
import { buttonText, emailLinkText, emailLinkUrl, formLabels, placeholderTexts } from '../../../shared/data/en/secondLandingPage/ContacUsTwo';


@Component({
  selector: 'app-contact-us-two',
  standalone: true,
  imports: [],
  templateUrl: './contact-us-two.component.html',
  styleUrl: './contact-us-two.component.css'
})
export class ContactUsTwoComponent {
 
  formLabels = formLabels;
  placeholderTexts = placeholderTexts;
  buttonText = buttonText;
  emailLinkText = emailLinkText;
  emailLinkUrl = emailLinkUrl;
  
}
