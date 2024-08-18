import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { TranslationService } from '../../../shared/translation/translation.service';

@Component({
  selector: 'app-hero-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-three.component.html',
  styleUrl: './hero-three.component.css'
})
export class HeroThreeComponent {
  hero :any;
 constructor(public translationService:TranslationService){
  this.hero = this.translationService.getTranslation().hero;

  

 }



}

