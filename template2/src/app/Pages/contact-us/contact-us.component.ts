import { Component } from '@angular/core';
import { buttonText, emailLinkText, emailLinkUrl, formLabels, placeholderTexts } from '../../shared/data/en/secondLandingPage/ContacUsTwo';


@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
 
  formLabels = formLabels;
  placeholderTexts = placeholderTexts;
  buttonText = buttonText;
  emailLinkText = emailLinkText;
  emailLinkUrl = emailLinkUrl;
  
}
