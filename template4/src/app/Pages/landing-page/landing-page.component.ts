import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AchivmentsComponent } from './achivments/achivments.component';
import { FeaturesComponent } from './features/features.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { StepsSectionComponent } from './steps-section/steps-section.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent,AchivmentsComponent,FeaturesComponent,OurTeamComponent,StepsSectionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
