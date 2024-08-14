import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-three',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './nav-three.component.html',
  styleUrl: './nav-three.component.css'
})
export class NavThreeComponent {

    isMenuOpen = false;
  
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
