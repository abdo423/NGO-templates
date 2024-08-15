import { Component } from '@angular/core';
import { achivmentsOne } from '../../../../shared/data/en/firstLandingPage/achivmentsOne';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-achivment-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achivment-one.component.html',
  styleUrl: './achivment-one.component.css'
})
export class AchivmentOneComponent {
 achivmentsOne = achivmentsOne;
}
