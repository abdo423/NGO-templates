import { Component } from '@angular/core';
import { TranslationService } from '../../../shared/translation/translation.service';

@Component({
  selector: 'app-volunters-section',
  standalone: true,
  imports: [],
  templateUrl: './volunters-section.component.html',
  styleUrl: './volunters-section.component.css'
})
export class VoluntersSectionComponent {
  volunters: any;
  constructor(transilationService: TranslationService) {
    this.volunters = transilationService.getTranslation().voluntersSection;
  }
}
