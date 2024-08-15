import { Component ,Input} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-donation-card-one',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './donation-card-one.component.html',
  styleUrl: './donation-card-one.component.css'
})
export class DonationCardOneComponent {
  @Input() card: any;
  
}
