import { Component } from '@angular/core';
import { galleryContent } from '../../shared/data/en/secondLandingPage/GalleryTwo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  galleryContent = galleryContent;
}
