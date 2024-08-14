import { Component } from '@angular/core';
import { CatalogCardComponent } from '../catalog-card/catalog-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  cards = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/600x360',
      label: 'New',
      readTime: '3 min read',
      title: 'Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.',
     
      buttonText: 'Learn More',
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/600x360',
      label: 'New',
      readTime: '3 min read',
      title: 'Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.',
   
      buttonText: 'Learn More',
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/600x360',
      label: 'New',
      readTime: '3 min read',
      title: 'Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.',
  
      buttonText: 'Learn More',
    },
    {
      id: 4,
      imageSrc: 'https://via.placeholder.com/600x360',
      label: 'New',
      readTime: '3 min read',
      title: 'Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.',
     
      buttonText: 'Learn More',
    },
    {
      id: 5,
      imageSrc: 'https://via.placeholder.com/600x360',
      label: 'New',
      readTime: '3 min read',
      title: 'Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.',
     
      buttonText: 'Learn More',
    },
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/600x360',
      label: 'New',
      readTime: '3 min read',
      title: 'Title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, mi sed egestas tincidunt, libero dolor bibendum nisl, non aliquam quam massa id lacus.',
    
      buttonText: 'Learn More',
    },
  ];
}
