import { Component } from '@angular/core';
import { FaqContentTwoComponent } from './faq-content-two/faq-content-two.component';

@Component({
  selector: 'app-faq-two',
  standalone: true,
  imports: [FaqContentTwoComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
