import { Component } from '@angular/core';
import { DonationCardTwoComponent } from './donation-card-two/donation-card-two.component';
import { donationCards } from '../../shared/data/en/secondLandingPage/DonationCardTwo';
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [DonationCardTwoComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class catalogComponent {
  doncationCards = donationCards;
  
}
