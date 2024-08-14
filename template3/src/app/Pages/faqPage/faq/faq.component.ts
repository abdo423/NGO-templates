import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FaqContentComponent } from '../faq-content/faq-content.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule,FaqContentComponent], // Remove this line
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
 
}
