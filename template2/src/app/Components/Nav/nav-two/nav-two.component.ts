import { Component, OnInit } from '@angular/core';
import { navLinks } from '../../../shared/data/en/secondLandingPage/NavTwo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-two',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-two.component.html',
  styleUrls: ['./nav-two.component.css']
})
export class NavTwoComponent  {
  navLinks = navLinks;


}