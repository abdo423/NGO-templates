import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { donationOptions } from '../../shared/data/en/firstLandingPage/DonationDetailsOne';
@Component({
  selector: 'app-donation-details',
  standalone: true,
  imports: [],
  templateUrl: './donation-details.component.html',
  styleUrl: './donation-details.component.css'
})
export class DonationDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id = 0;
  donationOptions = donationOptions;
  firstHeader: string;

  constructor() {
    this.id = this.route.snapshot.params['id'];
    // Find the first header in the donationOptions array
    this.firstHeader = this.donationOptions.find(option => option.type === 'header')?.label || '';
  }

  // Method to filter only 'button' type options
  getButtonOptions() {
    return this.donationOptions.filter(option => option.type === 'button');
  }
}
