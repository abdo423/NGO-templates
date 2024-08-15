import { Component,inject } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-donation-details-two',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class productComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id = 0;
  constructor() {
    this.id = this.route.snapshot.params['id'];
  }



}
