import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { footerContent } from '../../translation/languages/en/FooterOne';
import { TranslationService } from '../../translation/translation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.css'
})
export class FooterSectionComponent {
  footerContent :any;
  constructor(public translationService: TranslationService) {

  }
}
