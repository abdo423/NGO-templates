import { Component } from '@angular/core';
import { HeroTwoComponent } from '../hero-two/hero-two.component';
import { FeaturesTwoComponent } from '../features-two/features-two.component';
import { VoluntersSectionTwoComponent } from '../volunters-section-two/volunters-section-two.component';
import { AchivmentTwoComponent } from '../achivment-two/achivment-two.component';


@Component({
  selector: 'app-landing-page-two',
  standalone: true,
  imports: [HeroTwoComponent,FeaturesTwoComponent,VoluntersSectionTwoComponent,AchivmentTwoComponent],
  templateUrl: './landing-page-two.component.html',
  styleUrl: './landing-page-two.component.css'
})
export class LandingPageTwoComponent {

}
