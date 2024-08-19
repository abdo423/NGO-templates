import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  standalone: true,
  imports: [],
  templateUrl: './gallery-card.component.html',
  styleUrl: './gallery-card.component.css',
})
export class GalleryCardComponent implements OnInit {
  @Input() gallery: any;
  constructor() {
    // Component
  }
  ngOnInit(): void {
    console.log(this.gallery);
  }
}
