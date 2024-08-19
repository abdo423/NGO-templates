import { Component,Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.css'
})
export class CatalogCardComponent implements OnInit {
  @Input() item: any; 
  ngOnInit(): void {
    console.log(this.item);;
  }

  
 
}
