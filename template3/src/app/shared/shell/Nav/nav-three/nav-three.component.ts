import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../translation/translation.service';

@Component({
  selector: 'app-nav-three',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './nav-three.component.html',
  styleUrl: './nav-three.component.css'
})
export class NavThreeComponent {
  constructor(public translationService: TranslationService) { }
 
    isMenuOpen = false;
  
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
