import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { privacyPolicyContent } from '../../shared/translation/languages/en/termAndCondations';
import { TranslationService } from '../../shared/translation/translation.service';
@Component({
  selector: 'app-terms-and-condations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './terms-and-condations.component.html',
  styleUrl: './terms-and-condations.component.css'
})
export class TermsAndCondationsComponent {
  privacyPolicyContent :any;
  constructor(translationsService: TranslationService) {
    this.privacyPolicyContent = translationsService.getTranslation().TermsAndCondations;
  }

}
