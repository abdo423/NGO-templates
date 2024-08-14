import { Component } from '@angular/core';
import { aboutUsContent } from '../../../shared/data/en/secondLandingPage/AboutUsTwo';

@Component({
  selector: 'app-about-section-two',
  standalone: true,
  imports: [],
  templateUrl: './about-section-two.component.html',
  styleUrl: './about-section-two.component.css'
})
export class AboutSectionTwoComponent {
  aboutUsContent = aboutUsContent;
}
