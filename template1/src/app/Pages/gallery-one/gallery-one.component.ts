import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { galleryItems } from '../../shared/data/en/firstLandingPage/GalleryOne';

@Component({
  selector: 'app-gallery-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-one.component.html',
  styleUrl: './gallery-one.component.css'
})
export class GalleryOneComponent {
  galleryItems = galleryItems;
}
