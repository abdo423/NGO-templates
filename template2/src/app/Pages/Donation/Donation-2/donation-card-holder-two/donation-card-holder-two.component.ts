import { Component } from '@angular/core';
import { DonationCardTwoComponent } from '../donation-card-two/donation-card-two.component';
import { donationCards } from '../../../../shared/data/en/secondLandingPage/DonationCardTwo';
@Component({
  selector: 'app-donation-card-holder-two',
  standalone: true,
  imports: [DonationCardTwoComponent],
  templateUrl: './donation-card-holder-two.component.html',
  styleUrl: './donation-card-holder-two.component.css'
})
export class DonationCardHolderTwoComponent {
  doncationCards = donationCards;
  
}
