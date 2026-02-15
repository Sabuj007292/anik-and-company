// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css',
// })
// export class HomeComponent {

// }
import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from "../about/about.component";
import { ServicesComponent } from "../services/services.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutComponent, ServicesComponent, ProjectsComponent, ContactComponent],
  // template: `<app-hero></app-hero>`
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
