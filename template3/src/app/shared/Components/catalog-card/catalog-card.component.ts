import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../translation/translation.service';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.css',
})
export class CatalogCardComponent {
  constructor(public translationsService: TranslationService) {}
@Input() card :any;
}
