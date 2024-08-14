import { Component, OnInit } from '@angular/core';
import { footerContent } from '../../../shared/data/en/secondLandingPage/footerTwo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-section-two',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-section-two.component.html',
  styleUrl: './footer-section-two.component.css'
})
export class FooterSectionTwoComponent implements OnInit {
  footerContent = footerContent;
ngOnInit(): void {
  console.log(footerContent);
}
}
