import { Component } from '@angular/core';
import {CommonModule} from  '@angular/common'
import { TranslationService } from '../../../../shared/translation/translation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-team-one',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './our-team-one.component.html',
  styleUrl: './our-team-one.component.css'
})
export class OurTeamOneComponent {
 teamMembers :any;
constructor(public translationService:TranslationService){
 this.teamMembers = this.translationService.getTranslation().ourTeam;
}
}