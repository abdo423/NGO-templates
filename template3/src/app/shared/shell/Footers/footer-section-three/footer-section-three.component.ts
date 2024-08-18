import { Component, NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../translation/translation.service';

@Component({
  selector: 'app-footer-section-three',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-section-three.component.html',
  styleUrl: './footer-section-three.component.css'
})
export class FooterSectionThreeComponent {
 constructor(public translationService:TranslationService){}
}
