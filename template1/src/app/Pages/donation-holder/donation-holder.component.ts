import { Component } from '@angular/core';
import { donationCards } from '../../shared/translation/languages/en/DonationCardOne';

import { CommonModule } from '@angular/common';
import { DonationCardOneComponent } from './donation-card-one/donation-card-one.component';
import { TranslationService } from '../../shared/translation/translation.service';

@Component({
  selector: 'app-donation-holder',
  standalone: true,
  imports: [DonationCardOneComponent, CommonModule],
  templateUrl: './donation-holder.component.html',
  styleUrl: './donation-holder.component.css'
})
export class DonationHolderComponent {
donationCards :any;
constructor(transilationService: TranslationService) {
  this.donationCards = transilationService.getTranslation().donationCard;
}
}