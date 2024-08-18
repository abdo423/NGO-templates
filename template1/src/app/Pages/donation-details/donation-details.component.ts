import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPostContent } from '../../shared/translation/languages/en/DonationDetails';
import { TranslationService } from '../../shared/translation/translation.service';
@Component({
  selector: 'app-donation-details',
  standalone: true,
  imports: [],
  templateUrl: './donation-details.component.html',
  styleUrl: './donation-details.component.css',
})
export class DonationDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id = 0;
  blogPostContent:any;
  constructor(transilationService: TranslationService) {
    this.id = this.route.snapshot.params['id'];
    // Find the first header in the donationOptions array
     this.blogPostContent = transilationService.getTranslation().donationsDetailsSection;
  }
}
