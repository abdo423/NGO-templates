import { Component } from '@angular/core';
import { HeroTwoComponent } from './hero-two/hero-two.component';
import { FeaturesTwoComponent } from './features-two/features-two.component';
import { VoluntersSectionTwoComponent } from './volunters-section-two/volunters-section-two.component';
import { AchivmentComponent } from './achivment/achivment.component';
import { StepsSectionComponent } from './steps-section/steps-section.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroTwoComponent,FeaturesTwoComponent,VoluntersSectionTwoComponent,AchivmentComponent,StepsSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
