import { Component,inject } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-donation-details-two',
  standalone: true,
  imports: [],
  templateUrl: './donation-details-two.component.html',
  styleUrl: './donation-details-two.component.css'
})
export class DonationDetailsTwoComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id = 0;
  constructor() {
    this.id = this.route.snapshot.params['id'];
  }



}
