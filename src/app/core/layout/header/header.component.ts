// import { CommonModule } from '@angular/common';
// import { Component, HostListener, signal } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { SharedModule } from '../common/shared.module';
// import { IconName, ICONS } from '../common/icon-map';

// interface ContactItem {
//   icon: IconName;
//   label: string;
//   value: string;
//   href: string;
// }

// interface SocialLink {
//   icon: IconName;
//   label: string;
//   href: string;
//   class: string;
// }

// @Component({
//   selector: 'app-header',
//   imports: [CommonModule, RouterLink, SharedModule],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css',
// })
// export class HeaderComponent {

//   // Mobile Menu Toggle
//   isOpen = signal(false);
//   readonly icons = ICONS;
//    readonly whatsappNumber = '919062777486';

//   readonly whatsappMessage =
//     'Hello A-NIK & CO., I am interested in your solar installation services. Please share more details.';

//   readonly whatsappLink =
//     `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
//       this.whatsappMessage
//     )}`;
  

//   toggleMenu() {
//     this.isOpen.update(v => !v);
//   }

//   // Active Section (Scroll Spy)
//   activeSection: string = 'home';

//   @HostListener('window:scroll', [])

//   readonly contactItems: ContactItem[] = [
//     {
//       icon: 'whatsapp',
//       label: 'WhatsApp',
//       value: '+91 9062777486',
//       href: this.whatsappLink
//     },
//     {
//       icon: 'mail',
//       label: 'Email',
//       value: 'info@anikandco.com',
//       href: 'mailto:info@anikandco.com'
//     }
//   ];

//   readonly socialLinks = [
//     {
//       icon: 'facebook' as IconName,
//       label: 'Facebook',
//       href: '#',
//       class: 'facebook'
//     },
//     {
//       icon: 'linkedin' as IconName,
//       label: 'LinkedIn',
//       href: '#',
//       class: 'linkedin'
//     },
//     {
//       icon: 'instagram' as IconName,
//       label: 'Instagram',
//       href: '#',
//       class: 'instagram'
//     }
//   ];
//   onScroll() {

//     const sections = ['home', 'about', 'services', 'projects', 'contact'];

//     for (let section of sections) {
//       const element = document.getElementById(section);
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         if (rect.top <= 150 && rect.bottom >= 150) {
//           this.activeSection = section;
//         }
//       }
//     }
//   }
// }

import {
  CommonModule
} from '@angular/common';

import {
  Component,
  HostListener,
  signal
} from '@angular/core';

import {
  RouterLink
} from '@angular/router';

import {
  SharedModule
} from '../common/shared.module';

import {
  IconName,
  ICONS
} from '../common/icon-map';


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
  // SCROLL STATE
  // =====================================================

  scrolled = signal(false);


  // =====================================================
  // ACTIVE SECTION
  // =====================================================

  activeSection = 'home';


  // =====================================================
  // ICONS
  // =====================================================

  readonly icons = ICONS;


  // =====================================================
  // WHATSAPP
  // =====================================================

  readonly whatsappNumber = '919062777486';


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
      value: '+91 9062777486',
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

    this.isOpen.update(
      value => !value
    );

  }


  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

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


    // Header scroll state

    this.scrolled.set(
      scrollPosition > 30
    );


    // Update active section

    this.updateActiveSection();

  }


  // =====================================================
  // ACTIVE SECTION / SCROLL SPY
  // =====================================================

  private updateActiveSection(): void {

    const sections = [
      'home',
      'about',
      'services',
      'projects',
      'contact'
    ];


    const scrollPosition =
      window.scrollY + 150;


    for (const section of sections) {

      const element =
        document.getElementById(section);


      if (!element) {
        continue;
      }


      const sectionTop =
        element.offsetTop;


      const sectionBottom =
        sectionTop +
        element.offsetHeight;


      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionBottom
      ) {

        this.activeSection = section;

        break;

      }

    }

  }


  // =====================================================
  // NAVIGATION
  // =====================================================

  navigateToSection(section: string): void {

    this.activeSection = section;

    this.closeMenu();

  }

}
