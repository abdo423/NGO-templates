import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryCardComponent } from '../../shared/Components/gallery-card/gallery-card.component';
import { TranslationService } from '../../shared/translation/translation.service';


@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule,GalleryCardComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent {
  gallery:any;
  constructor(translationsService: TranslationService) {
    this.gallery = translationsService.getTranslation().gallery;
    console.log(this.gallery.items);
   
  }
// src/app/gallery-content.ts


}
