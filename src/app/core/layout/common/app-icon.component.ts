import {
  Component,
  Input
} from '@angular/core';

import {
  LucideAngularModule,
  LucideIconData
} from 'lucide-angular';

import {
  ICONS,
  IconName
} from './icon-map';


@Component({
  selector: 'app-icon',

  standalone: true,

  imports: [
    LucideAngularModule
  ],

  template: `

    <!-- =====================================================
         LUCIDE ICONS
         ===================================================== -->

    @if (lucideIcon) {

      <lucide-icon
        [img]="lucideIcon"
        [size]="size"
        [strokeWidth]="strokeWidth">
      </lucide-icon>

    }


    <!-- =====================================================
         LINKEDIN
         ===================================================== -->

    @if (name === 'linkedin') {

      <svg
        [attr.width]="size"
        [attr.height]="size"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true">

        <path
          d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04
          -1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05
          c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z
          M5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12z
          M3.56 20.45h3.56V9H3.56v11.45z" />

      </svg>

    }


    <!-- =====================================================
         INSTAGRAM
         ===================================================== -->

    @if (name === 'instagram') {

      <svg
        [attr.width]="size"
        [attr.height]="size"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        [attr.stroke-width]="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true">

        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5">
        </rect>

        <circle
          cx="12"
          cy="12"
          r="4">
        </circle>

        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none">
        </circle>

      </svg>

    }


    <!-- =====================================================
         FACEBOOK
         ===================================================== -->

    @if (name === 'facebook') {

      <svg
        [attr.width]="size"
        [attr.height]="size"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true">

        <path
          d="M13.5 22v-8h2.75l.5-3H13.5V9.05
          c0-.87.24-1.55 1.58-1.55h1.67V4.82
          c-.29-.04-1.28-.12-2.43-.12
          -2.4 0-4.04 1.47-4.04 4.18V11H7.5v3h2.78v8h3.22z" />

      </svg>

    }


    <!-- =====================================================
         WHATSAPP
         ===================================================== -->

    @if (name === 'whatsapp') {

      <svg
        [attr.width]="size"
        [attr.height]="size"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        [attr.stroke-width]="strokeWidth"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true">

        <path
          d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L4 20l1.2-4.3
          A8.5 8.5 0 1 1 21 11.5Z">
        </path>

        <path
          d="M8.5 8.5c.3-.6.7-.6 1-.1l.7 1.2
          c.2.3.1.6-.1.8-.1l.5-.5
          c.6 1.1 1.5 2 2.6 2.6l.5-.5
          c.2-.2.5-.3.8-.1l1.2.7
          c.5.3.5.7-.1 1
          -.5.3-1.1.4-1.7.1
          -2.4-1-4.3-2.9-5.3
          -.3-.6-.2-1.2.1-1.7Z">
        </path>

      </svg>

    }

  `,

  styles: [`

    :host {
      display: inline-flex;

      align-items: center;
      justify-content: center;

      width: auto;
      height: auto;

      line-height: 0;

      flex-shrink: 0;
    }

    lucide-icon {
      display: inline-flex;
      line-height: 0;
    }

    svg {
      display: block;
    }

  `]
})
export class AppIconComponent {

  @Input({
    required: true
  })
  name!: IconName;


  @Input()
  size = 20;


  @Input()
  strokeWidth = 2;


  /* =======================================================
     RETURN ONLY LUCIDE DATA

     Brand strings are prevented from reaching
     [img]="..."
     ======================================================= */

  get lucideIcon(): LucideIconData | undefined {

    const value = ICONS[this.name];

    if (typeof value === 'string') {
      return undefined;
    }

    return value;
  }

}