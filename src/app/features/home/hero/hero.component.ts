import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
mobileMenu = false;

  toggleMenu(): void {
    this.mobileMenu = !this.mobileMenu;
  }

  closeMenu(): void {
    this.mobileMenu = false;
  }

  getQuote(): void {

    const message =
      `Hello A-NIK & CO.%0A%0A` +
      `I am interested in a Solar Installation.%0A` +
      `Please provide me with a free quotation.`;

    window.open(
      `https://wa.me/919830316065?text=${message}`,
      '_blank'
    );
  }

  calculateSystem(): void {

    const message =
      `Hello A-NIK & CO.%0A%0A` +
      `I want to calculate my rooftop solar system size.%0A` +
      `Please guide me regarding the required system capacity and quotation.`;

    window.open(
      `https://wa.me/919830316065?text=${message}`,
      '_blank'
    );
  }
}
