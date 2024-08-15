import { Component } from '@angular/core';
import { HeroThreeComponent } from './hero-three/hero-three.component';
import { FeaturesThreeComponent } from './features-three/features-three.component';
import { CompanyLogosComponent } from '../../shared/Components/company-logos/company-logos.component';
import { OurTeamOneComponent } from './ourTeam/our-team-one/our-team-one.component';



@Component({
  selector: 'app-landing-page-three',
  standalone: true,
  imports: [HeroThreeComponent,FeaturesThreeComponent,CompanyLogosComponent,OurTeamOneComponent],
  templateUrl: './landing-page-three.component.html',
  styleUrl: './landing-page-three.component.css'
})
export class LandingPageThreeComponent {
 
}
