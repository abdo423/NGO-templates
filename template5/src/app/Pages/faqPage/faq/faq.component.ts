import { Component } from '@angular/core';
import { FaqSectionComponent } from '../faq-section/faq-section.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqSectionComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs= [
    {
      "title": "What could possibly be your first question?",
      "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
      "title": "What could possibly be your first question?",
      "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    },
    {
      "title": "What could possibly be your first question?",
      "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit."
    }
  ]
  
}
