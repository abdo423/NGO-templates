import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { galleryItems } from '../../shared/translation/languages/en/GalleryOne';
import { TranslationService } from '../../shared/translation/translation.service';

@Component({
  selector: 'app-gallery-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-one.component.html',
  styleUrl: './gallery-one.component.css'
})
export class GalleryOneComponent {
  galleryItems :any;
  constructor( translationService: TranslationService) {
    this.galleryItems = translationService.getTranslation().gallerySection;
  }
}
