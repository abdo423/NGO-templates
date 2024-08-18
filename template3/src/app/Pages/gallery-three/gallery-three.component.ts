import { Component } from '@angular/core';
import { TranslationService } from '../../shared/translation/translation.service';

@Component({
  selector: 'app-gallery-three',
  standalone: true,
  imports: [],
  templateUrl: './gallery-three.component.html',
  styleUrl: './gallery-three.component.css'
})
export class GalleryThreeComponent {
  gallery:any;
  constructor(translationsService: TranslationService) {
    this.gallery = translationsService.getTranslation().gallery;
   
  }
}
