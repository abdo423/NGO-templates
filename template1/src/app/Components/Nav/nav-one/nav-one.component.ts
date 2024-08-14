// src/app/nav-one/nav-one.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {NavOne} from '../../../shared/data/en/firstLandingPage/NavOne'

@Component({
  selector: 'app-nav-one',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-one.component.html',
  styleUrls: ['./nav-one.component.css']
})
export class NavOneComponent {

  navbarOpen = false;
  NavOne = NavOne;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
