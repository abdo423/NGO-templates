import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavThreeComponent } from './shared/Components/Nav/nav-three/nav-three.component';
import { FooterSectionThreeComponent } from './shared/Components/Footers/footer-section-three/footer-section-three.component';
import { ScrollToTopComponent } from './shared/Components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavThreeComponent,
    FooterSectionThreeComponent,
    ScrollToTopComponent,
  ], // Import standalone component directly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Component logic here
}
