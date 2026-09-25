import { Component } from '@angular/core';
import { AppIconComponent } from '../../core/layout/common/app-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [AppIconComponent, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {

}
