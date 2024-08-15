import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-content-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq-content-two.component.html',
  styleUrl: './faq-content-two.component.css'
})
export class FaqContentTwoComponent {
  isOpen: boolean = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
