import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-faq-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-content.component.html',
  styleUrl: './faq-content.component.css'
})
export class FaqContentComponent {
  isOpen: boolean = false;
  @Input() accordionContent: any;
  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
