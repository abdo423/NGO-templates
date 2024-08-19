import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation/translation.service';

@Component({
  selector: 'app-footer-section-three',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './footer-section-three.component.html',
  styleUrl: './footer-section-three.component.css'
})
export class FooterSectionThreeComponent {
  constructor(public translationService: TranslationService) {

  }
}
