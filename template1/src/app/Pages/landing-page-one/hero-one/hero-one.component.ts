import { Component } from '@angular/core';
import { HeroOne } from '../../../shared/data/en/firstLandingPage/HeroOne';
@Component({
  selector: 'app-hero-one',
  standalone: true,
  imports: [],
  templateUrl: './hero-one.component.html',
  styleUrl: './hero-one.component.css'
})
export class HeroOneComponent {
HeroOne = HeroOne;
}
