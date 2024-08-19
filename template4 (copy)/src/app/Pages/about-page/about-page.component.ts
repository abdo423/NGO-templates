import { Component } from '@angular/core';
import { AboutSectionOneComponent } from './about-section-one/about-section-one.component';
import { AboutSectionTwoComponent } from './about-section-two/about-section-two.component';
import { AboutSectionThreeComponent } from './about-section-three/about-section-three.component';
import { TranslationService } from '../../shared/translation/translation.service';


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutSectionOneComponent, AboutSectionTwoComponent,AboutSectionThreeComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  aboutPage:any;
 constructor(translationService: TranslationService) {
  this.aboutPage = translationService.getTranslation().aboutUs;
    
  } 
}
