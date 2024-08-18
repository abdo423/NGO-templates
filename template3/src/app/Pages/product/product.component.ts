import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../shared/translation/translation.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id = 0;
 

  product : any ;

  constructor(translationsService: TranslationService) {
    this.id = this.route.snapshot.params['id'];
    // Find the first header in the donationOptions array
    this.product = translationsService.getTranslation().product;
  }

}
