import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavOneComponent } from '../../shared/shell/nav-one/nav-one.component';
import { HeroOneComponent } from './hero-one/hero-one.component';
import { FeaturesComponent } from './features-one/features.component';
import { DonationHolderComponent } from '../donation-holder/donation-holder.component';
import { AchivmentOneComponent } from './achivments/achivment-one/achivment-one.component';
import { VoluntersSectionComponent } from './volunters-section/volunters-section.component';
import { FooterSectionComponent } from '../../shared/shell/footer-section/footer-section.component';


@Component({
  selector: 'app-landing-page-one',
  standalone: true,
  imports: [
    RouterOutlet,
    NavOneComponent,
    HeroOneComponent,
    FeaturesComponent,
    DonationHolderComponent,
    AchivmentOneComponent,
    VoluntersSectionComponent,
    FooterSectionComponent,
  ], 
  templateUrl: './landing-page-one.component.html',
  styleUrl: './landing-page-one.component.css'
})
export class LandingPageOneComponent {

}
