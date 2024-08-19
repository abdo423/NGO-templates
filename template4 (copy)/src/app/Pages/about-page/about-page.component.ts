import { Component } from '@angular/core';
import { AboutSectionOneComponent } from './about-section-one/about-section-one.component';
import { AboutSectionTwoComponent } from './about-section-two/about-section-two.component';
import { AboutSectionThreeComponent } from './about-section-three/about-section-three.component';


@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutSectionOneComponent, AboutSectionTwoComponent,AboutSectionThreeComponent],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

}
