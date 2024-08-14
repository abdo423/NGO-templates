import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id = 0;
 


  constructor() {
    this.id = this.route.snapshot.params['id'];
    // Find the first header in the donationOptions array

  }

}
