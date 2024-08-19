import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-section-one',
  standalone: true,
  imports: [],
  templateUrl: './about-section-one.component.html',
  styleUrl: './about-section-one.component.css'
})
export class AboutSectionOneComponent {
@Input() sectionOne: any;
}
