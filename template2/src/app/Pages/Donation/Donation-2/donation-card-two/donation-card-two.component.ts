import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation-card-two',
  standalone: true,
  imports: [],
  templateUrl: './donation-card-two.component.html',
  styleUrl: './donation-card-two.component.css'
})
export class DonationCardTwoComponent {
  constructor(private router: Router) {}
 @Input() Card :any
 getProgressPercentage(): number {
  return (this.Card.raisedAmount / this.Card.targetAmount) * 100;
}

navigateToDetails() {
  this.router.navigate(['/donate', this.Card.id]);
}
}
