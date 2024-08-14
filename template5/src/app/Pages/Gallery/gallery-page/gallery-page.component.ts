import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleryCardComponent } from '../gallery-card/gallery-card.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [CommonModule,GalleryCardComponent],
  templateUrl: './gallery-page.component.html',
  styleUrl: './gallery-page.component.css'
})
export class GalleryPageComponent {
// src/app/gallery-content.ts
 portfolioItems = [
  {
    href: "/assets/image/img1.jpg",
    src: "/assets/image/img1.jpg",
    title: "Logo Design",
    category: "Branding",
  },
  {
    href: "/assets/image/img2.jpg",
    src: "/assets/image/img2.jpg",
    title: "Web Development",
    category: "Web",
  },
  {
    href: "/assets/image/img3.jpg",
    src: "/assets/image/img3.jpg",
    title: "Graphic Design",
    category: "Graphic",
  },
  {
    href: "/assets/image/img4.jpg",
    src: "/assets/image/img4.jpg",
    title: "Logo Design",
    category: "Branding",
  },
  {
    href: "/assets/image/img5.jpg",
    src: "/assets/image/img5.jpg",
    title: "Web Development",
    category: "Web",
  },
  {
    href: "/assets/image/img6.jpg",
    src: "/assets/image/img6.jpg",
    title: "Graphic Design",
    category: "Graphic",
  },
  {
    href: "/assets/image/img7.jpg",
    src: "/assets/image/img7.jpg",
    title: "Logo Design",
    category: "Branding",
  },
  {
    href: "/assets/image/img8.jpg",
    src: "/assets/image/img8.jpg",
    title: "Web Development",
    category: "Web",
  },
  {
    href: "/assets/image/img9.jpg",
    src: "/assets/image/img9.jpg",
    title: "Graphic Design",
    category: "Graphic",
  },
  {
    href: "/assets/image/img10.jpg",
    src: "/assets/image/img10.jpg",
    title: "App Design",
    category: "App",
  }
];


}
