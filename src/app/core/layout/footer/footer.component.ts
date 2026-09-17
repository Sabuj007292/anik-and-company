import { Component } from '@angular/core';
import { AppIconComponent } from '../common/app-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AppIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

   scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
