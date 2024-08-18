import { Component } from '@angular/core';
import { CatalogCardComponent } from '../../shared/Components/catalog-card/catalog-card.component';
import { TranslationService } from '../../shared/translation/translation.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
catalog :any;
constructor(public translationService:TranslationService){
 this.catalog = this.translationService.getTranslation().catalog;
}
}