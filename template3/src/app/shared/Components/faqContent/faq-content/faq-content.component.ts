import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-content.component.html',
  styleUrl: './faq-content.component.css'
})
export class FaqContentComponent {
  isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
