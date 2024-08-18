import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-content.component.html',
  styleUrls: ['./faq-content.component.css'],
})
export class FaqContentComponent {
  @Input() faqs: any;
  isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
