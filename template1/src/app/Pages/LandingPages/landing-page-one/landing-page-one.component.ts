import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavOneComponent } from '../../../Components/Nav/nav-one/nav-one.component';
import { HeroOneComponent } from '../hero-one/hero-one.component';
import { FeaturesComponent } from '../features-one/features.component';
import { DonationHolderComponent } from '../../Donation/donation-holder/donation-holder.component';
import { AchivmentOneComponent } from '../achivments/achivment-one/achivment-one.component';
import { FooterSectionComponent } from '../../../Components/Footers/footer-section/footer-section.component';
import { VoluntersSectionComponent } from '../volunters-section/volunters-section.component';


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
