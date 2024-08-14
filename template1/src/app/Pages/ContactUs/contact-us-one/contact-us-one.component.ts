import { Component } from '@angular/core';
import { CONTACT_FORM_TEXT } from '../../../shared/data/en/firstLandingPage/ContactUsOne';
@Component({
  selector: 'app-contact-us-one',
  standalone: true,
  imports: [],
  templateUrl: './contact-us-one.component.html',
  styleUrl: './contact-us-one.component.css'
})
export class ContactUsOneComponent {
  text = CONTACT_FORM_TEXT;
}
