import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { aboutUsContent } from '../../shared/translation/languages/en/aboutUsOne';
import { TranslationService } from '../../shared/translation/translation.service';
@Component({
  selector: 'app-about-section-one',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-section-one.component.html',
  styleUrl: './about-section-one.component.css'
})
export class AboutSectionOneComponent {
  aboutUsContent :any;
  constructor(transilationService: TranslationService) {
    this.aboutUsContent = transilationService.getTranslation().aboutSection;
  }
}
