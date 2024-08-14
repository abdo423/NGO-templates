import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerContent } from '../../../data/en/firstLandingPage/FooterOne';
@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent {
  footerContent = footerContent;
}
