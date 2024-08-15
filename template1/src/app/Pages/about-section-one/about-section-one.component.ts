import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { aboutUsContent } from '../../shared/data/en/firstLandingPage/aboutUsOne';
@Component({
  selector: 'app-about-section-one',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-section-one.component.html',
  styleUrl: './about-section-one.component.css'
})
export class AboutSectionOneComponent {
  aboutUsContent = aboutUsContent;
}
