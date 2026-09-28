import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  mobileMenu = false;


  // =========================================================
  // MOBILE MENU
  // =========================================================

  toggleMenu(): void {
    this.mobileMenu = !this.mobileMenu;
  }


  closeMenu(): void {
    this.mobileMenu = false;
  }


  // =========================================================
  // GET SOLAR QUOTE
  // =========================================================

  getQuote(): void {

    const message =
      `Hello A-NIK & CO.%0A%0A` +
      `I am interested in a Rooftop Solar Installation.%0A` +
      `Please provide me with a free quotation.%0A%0A` +
      `Thank you.`;

    window.open(
      `https://wa.me/919830316065?text=${message}`,
      '_blank'
    );
  }


  // =========================================================
  // CALCULATE SOLAR SYSTEM
  // =========================================================

  calculateSystem(): void {

    const message =
      `Hello A-NIK & CO.%0A%0A` +
      `I want to calculate my rooftop solar system size.%0A` +
      `Please guide me regarding:%0A` +
      `• Required solar capacity%0A` +
      `• Solar modules%0A` +
      `• Installation cost%0A` +
      `• Net metering%0A` +
      `• Subsidy assistance%0A%0A` +
      `Please provide the details.`;

    window.open(
      `https://wa.me/919830316065?text=${message}`,
      '_blank'
    );
  }

}