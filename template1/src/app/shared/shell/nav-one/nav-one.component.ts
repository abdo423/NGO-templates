// src/app/nav-one/nav-one.component.ts
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import {NavOne} from '../../translation/languages/en/NavOne'
import { TranslationService } from '../../translation/translation.service';

@Component({
  selector: 'app-nav-one',
  standalone: true,
  imports: [CommonModule, RouterLink,NgFor],
  templateUrl: './nav-one.component.html',
  styleUrls: ['./nav-one.component.css']
})
export class NavOneComponent {
 
  translation :any;
  constructor(public translationService: TranslationService) { 
    this.translation = translationService.getTranslation().navbar;

  }

  navbarOpen = true;
  
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
