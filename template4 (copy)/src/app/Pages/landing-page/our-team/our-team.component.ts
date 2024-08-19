import { Component } from '@angular/core';
import { TranslationService } from '../../../shared/translation/translation.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
  teamSection: any;
 constructor(translationService: TranslationService) {
  // Component
  this.teamSection = translationService.getTranslation().ourTeam;

 }  
}
