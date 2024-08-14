import { Component } from '@angular/core';
import { galleryContent } from '../../../shared/data/en/secondLandingPage/GalleryTwo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-two.component.html',
  styleUrl: './gallery-two.component.css'
})
export class GalleryTwoComponent {
  galleryContent = galleryContent;
}
