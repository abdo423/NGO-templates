import { Component } from '@angular/core';
import { FeaturesOne } from '../../../shared/data/en/firstLandingPage/FeaturesOne';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  featuresData =  FeaturesOne;
}
