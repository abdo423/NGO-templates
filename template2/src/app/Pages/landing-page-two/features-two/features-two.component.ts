import { Component } from '@angular/core';
import { featuresContent } from '../../../shared/data/en/secondLandingPage/FeaturesTwo';


@Component({
  selector: 'app-features-two',
  standalone: true,
  imports: [],
  templateUrl: './features-two.component.html',
  styleUrl: './features-two.component.css'
})
export class FeaturesTwoComponent {
 featuresContent =  featuresContent;
}
