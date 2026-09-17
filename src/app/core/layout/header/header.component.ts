import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  signal
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { SharedModule } from '../common/shared.module';
import { IconName, ICONS } from '../common/icon-map';

interface ContactItem {
  icon: IconName;
  label: string;
  value: string;
  href: string;
}

interface SocialLink {
  icon: IconName;
  label: string;
  href: string;
  class: string;
}

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    SharedModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // =====================================================
  // MOBILE MENU
  // =====================================================

  isOpen = signal(false);


  // =====================================================
  // HEADER SCROLL STATE
  // =====================================================

  scrolled = signal(false);


  // =====================================================
  // ACTIVE NAVIGATION
  // =====================================================

  activeSection = 'home';


  // =====================================================
  // SECTION LIST
  // =====================================================

  private readonly sections = [
    'home',
    'rooftop-solar',
    'about',
    'services',
    'projects',
    'contact'
  ];


  // =====================================================
  // ICONS
  // =====================================================

  readonly icons = ICONS;


  // =====================================================
  // WHATSAPP
  // =====================================================

  readonly whatsappNumber = '919830316065';

  readonly whatsappMessage =
    'Hello A-NIK & CO., I am interested in your solar installation services. Please share more details.';

  readonly whatsappLink =
    `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      this.whatsappMessage
    )}`;


  // =====================================================
  // CONTACT ITEMS
  // =====================================================

  readonly contactItems: ContactItem[] = [

    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: '+91 9830316065',
      href: this.whatsappLink
    },

    {
      icon: 'mail',
      label: 'Email',
      value: 'info@anikandco.com',
      href: 'mailto:info@anikandco.com'
    }

  ];


  // =====================================================
  // SOCIAL LINKS
  // =====================================================

  readonly socialLinks: SocialLink[] = [

    {
      icon: 'facebook',
      label: 'Facebook',
      href: '#',
      class: 'facebook'
    },

    {
      icon: 'linkedin',
      label: 'LinkedIn',
      href: '#',
      class: 'linkedin'
    },

    {
      icon: 'instagram',
      label: 'Instagram',
      href: '#',
      class: 'instagram'
    }

  ];


  // =====================================================
  // MOBILE MENU
  // =====================================================

  toggleMenu(): void {
    this.isOpen.update(value => !value);
  }


  closeMenu(): void {
    this.isOpen.set(false);
  }


  // =====================================================
  // WINDOW SCROLL
  // =====================================================

  @HostListener('window:scroll')
  onScroll(): void {

    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      0;

    // Header shrink state
    this.scrolled.set(scrollPosition > 30);

    // Auto active navigation
    this.updateActiveSection();
  }


  // =====================================================
  // SCROLL SPY
  // =====================================================

  private updateActiveSection(): void {

    const header = document.querySelector('header');

    const headerHeight =
      header?.getBoundingClientRect().height ?? 80;

    /*
     * Position used to determine which section
     * is currently visible.
     */
    const spyPosition =
      headerHeight + 100;

    let currentSection = 'home';

    for (const sectionId of this.sections) {

      const section =
        document.getElementById(sectionId);

      if (!section) {
        continue;
      }

      const rect =
        section.getBoundingClientRect();

      /*
       * If section has reached the scroll-spy line,
       * make it active.
       */
      if (rect.top <= spyPosition) {
        currentSection = sectionId;
      }
    }

    if (this.activeSection !== currentSection) {
      this.activeSection = currentSection;
    }
  }


  // =====================================================
  // NAVIGATION
  // =====================================================

  navigateToSection(
    sectionId: string,
    event?: Event
  ): void {

    // Stop normal anchor/router jump
    event?.preventDefault();

    const section =
      document.getElementById(sectionId);

    if (!section) {
      console.warn(
        `Section #${sectionId} was not found.`
      );

      return;
    }

    const header =
      document.querySelector('header');

    const headerHeight =
      header?.getBoundingClientRect().height ?? 80;

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY;

    const targetPosition =
      sectionTop - headerHeight;

    // Set active tab immediately
    this.activeSection = sectionId;

    // Close mobile menu
    this.closeMenu();

    // Smooth scroll
    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: 'smooth'
    });
  }


  // =====================================================
  // CALCULATE SOLAR SYSTEM
  // =====================================================

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