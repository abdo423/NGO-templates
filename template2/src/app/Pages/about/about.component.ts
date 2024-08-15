import { Component } from '@angular/core';
import { aboutUsContent } from '../../shared/data/en/secondLandingPage/AboutUsTwo';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutUsContent = aboutUsContent;
}
