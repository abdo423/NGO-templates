import { Component } from '@angular/core';
import { donationCards } from '../../shared/data/en/firstLandingPage/DonationCardOne';

import { CommonModule } from '@angular/common';
import { DonationCardOneComponent } from './donation-card-one/donation-card-one.component';

@Component({
  selector: 'app-donation-holder',
  standalone: true,
  imports: [DonationCardOneComponent, CommonModule],
  templateUrl: './donation-holder.component.html',
  styleUrl: './donation-holder.component.css'
})
export class DonationHolderComponent {
donationCards = donationCards;
}
