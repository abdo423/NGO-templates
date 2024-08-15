import { Component } from '@angular/core';
import { CatalogCardComponent } from '../../shared/Components/catalog-card/catalog-card.component';


@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
   blogPosts = [
    {
      id:1,
      category: "CATEGORY",
      title: "The Catalyzer",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      stats: {
        views: "1.2K",
        comments: 6
      }
    },
    {
      id:2,
      category: "CATEGORY",
      title: "The 400 Blows",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      stats: {
        views: "1.2K",
        comments: 6
      }
    },
    {
      id:3,
      category: "CATEGORY",
      title: "Shooting Stars",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      stats: {
        views: "1.2K",
        comments: 6
      }
    }
  ];
  
}
