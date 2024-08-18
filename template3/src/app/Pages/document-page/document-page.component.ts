import { Component } from '@angular/core';
import { SingleDocumentComponent } from './single-document/single-document.component';
import { TranslationService } from '../../shared/translation/translation.service';

@Component({
  selector: 'app-document-page',
  standalone: true,
  imports: [SingleDocumentComponent],
  templateUrl: './document-page.component.html',
  styleUrl: './document-page.component.css'
})
export class DocumentPageComponent {
   documents: any;
   constructor(translationsService: TranslationService) {
    this.documents = translationsService.getTranslation().documents;
  
}
}