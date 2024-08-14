import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { privacyPolicyContent } from '../../shared/data/en/secondLandingPage/termAndCondations';
@Component({
  selector: 'app-terms-and-condations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './terms-and-condations.component.html',
  styleUrl: './terms-and-condations.component.css'
})
export class TermsAndCondationsComponent {
  privacyPolicyContent = privacyPolicyContent;

}
