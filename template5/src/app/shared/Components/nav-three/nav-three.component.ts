import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../translation/translation.service';
import { navbar } from '../../translation/languages/en/navbar';

@Component({
  selector: 'app-nav-three',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './nav-three.component.html',
  styleUrl: './nav-three.component.css'
})
export class NavThreeComponent {
  headerContent:any;
    isMenuOpen = false;
    constructor(public translationService: TranslationService) {
      console.log(translationService.getTranslation().navbar);
      this.headerContent = navbar;
   
     }
    
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
