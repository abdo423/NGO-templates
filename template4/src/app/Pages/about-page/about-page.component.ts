import { Component } from '@angular/core';
import { AboutSectionOneComponent } from './about-section-one/about-section-one.component';
import { AboutSectionTwoComponent } from './about-section-two/about-section-two.component';


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutSectionOneComponent, AboutSectionTwoComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
