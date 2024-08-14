import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavTwoComponent } from './shared/shell/Nav/nav-two/nav-two.component';
import { FooterSectionTwoComponent } from './shared/shell/Footers/footer-section-two/footer-section-two.component';
import { ScrollToTopComponent } from './shared/Components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,

    NavTwoComponent,
    FooterSectionTwoComponent,

    ScrollToTopComponent,
  ], // Import standalone component directly
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Component logic here
}
