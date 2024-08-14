import { Component } from '@angular/core';
import { CatalogCardComponent } from '../catalog-card/catalog-card.component';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CatalogCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  contentArray = [
    {
      id: 1,
      imgSrc: 'https://dummyimage.com/1204x504',
      imgAlt: 'The Catalyzer',
      title: 'The Catalyzer',
      description:
        'Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.',
      link: {
        text: 'Learn More',
        routerLink: ['donate'],
        icon: {
          path: 'M5 12h14M12 5l7 7-7 7',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
        },
      },
    },
    {
      id: 2,
      imgSrc: 'https://dummyimage.com/1204x504/000/fff',
      imgAlt: 'Shooting Stars',
      title: 'Shooting Stars',
      description:
        'Trust fund umami mustache brooklyn, snackwave hella iceland. Sriracha taximy chia unicorn. Snackwave jianbing microdosing chambray.',
      link: {
        text: 'Discover',
        routerLink: ['discover'],
        icon: {
          path: 'M5 12h14M12 5l7 7-7 7',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
        },
      },
    },
    {
      id: 3,
      imgSrc: 'https://dummyimage.com/1204x504/333/ccc',
      imgAlt: 'Neptune',
      title: 'Neptune',
      description:
        'Skateboard +1 mustache fixie paleo lumbersexual. Pitchfork drinking vinegar poke chillwave cloud bread. Disrupt glossier gastropub, echo park lumbersexual.',
      link: {
        text: 'Explore',
        routerLink: ['explore'],
        icon: {
          path: 'M5 12h14M12 5l7 7-7 7',
          viewBox: '0 0 24 24',
          strokeWidth: 2,
        },
      },
    },
  ];
}
