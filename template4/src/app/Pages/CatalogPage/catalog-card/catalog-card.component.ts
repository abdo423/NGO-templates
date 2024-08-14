import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.css'
})
export class CatalogCardComponent {
  @Input() CardData: any; 
}
