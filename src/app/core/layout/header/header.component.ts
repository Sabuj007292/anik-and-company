import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  // Mobile Menu Toggle
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  // Active Section (Scroll Spy)
  activeSection: string = 'home';

  @HostListener('window:scroll', [])
  onScroll() {

    const sections = ['home', 'about', 'services', 'projects', 'contact'];

    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = section;
        }
      }
    }
  }
}
