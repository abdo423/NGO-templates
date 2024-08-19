import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-section-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-section-three.component.html',
  styleUrl: './about-section-three.component.css'
})
export class AboutSectionThreeComponent {
@Input() sectionThree: any;
}
