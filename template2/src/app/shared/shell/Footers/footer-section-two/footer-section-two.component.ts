import { Component, OnInit } from '@angular/core';
import { footerContent } from '../../../data/en/secondLandingPage/footerTwo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-section-two',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-section-two.component.html',
  styleUrl: './footer-section-two.component.css'
})
export class FooterSectionTwoComponent implements OnInit  {
  footerContent = footerContent;
  currentYear: number = 0;
  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
