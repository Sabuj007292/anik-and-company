import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
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
  imports: [CommonModule, RouterLink, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  // Mobile Menu Toggle
  isOpen = signal(false);
  readonly icons = ICONS;
  

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  // Active Section (Scroll Spy)
  activeSection: string = 'home';

  @HostListener('window:scroll', [])

  readonly contactItems: ContactItem[] = [
    {
      icon: 'phone',
      label: 'Call Us',
      value: '+91 9830316065',
      href: 'tel:+919830316065'
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'info@anikandco.com',
      href: 'mailto:info@anikandco.com'
    }
  ];

  readonly socialLinks = [
    {
      icon: 'facebook' as IconName,
      label: 'Facebook',
      href: '#',
      class: 'facebook'
    },
    {
      icon: 'linkedin' as IconName,
      label: 'LinkedIn',
      href: '#',
      class: 'linkedin'
    },
    {
      icon: 'instagram' as IconName,
      label: 'Instagram',
      href: '#',
      class: 'instagram'
    }
  ];
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
