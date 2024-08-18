import { Component } from '@angular/core';
import { achivmentsOne } from '../../../../shared/translation/languages/en/achivmentsOne';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../shared/translation/translation.service';
@Component({
  selector: 'app-achivment-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achivment-one.component.html',
  styleUrl: './achivment-one.component.css'
})
export class AchivmentOneComponent {
 achivmentsOne = achivmentsOne;
 constructor(transilationService: TranslationService) {
   this.achivmentsOne = transilationService.getTranslation().achivmentsSection;
 }
}
