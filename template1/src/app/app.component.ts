import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavOneComponent } from './Components/Nav/nav-one/nav-one.component';
import { FooterSectionComponent } from './Components/Footers/footer-section/footer-section.component';
import { ScrollToTopComponent } from './Components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    FooterSectionComponent,
    NavOneComponent,

    ScrollToTopComponent,
  ], // Import standalone component directly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Component logic here
}
