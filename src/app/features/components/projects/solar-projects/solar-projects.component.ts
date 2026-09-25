import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type SolarCapacity =
  | 'ALL'
  | '3 kW'
  | '5 kW'
  | '10 kW'
  | '20 kW';

interface SolarProject {

  id: number;

  capacity: Exclude<SolarCapacity, 'ALL'>;

  category:
    | 'Residential'
    | 'Commercial'
    | 'Industrial';

  scheme: string;

  clientName: string;

  location: string;

  title: string;

  description: string;

  image: string;
}


@Component({
  selector: 'app-solar-projects',

  standalone: true,

  imports: [
    RouterLink
  ],

  templateUrl: './solar-projects.component.html',

  styleUrl: './solar-projects.component.css'
})
export class SolarProjectsComponent {


  // ==========================================================
  // FILTER BUTTONS
  // ==========================================================

  categories: SolarCapacity[] = [

    'ALL',

    '3 kW',

    '5 kW',

    '10 kW',

    '20 kW'

  ];


  // ==========================================================
  // CURRENT FILTER
  // ==========================================================

  activeCategory: SolarCapacity = 'ALL';



  // ==========================================================
  // ALL SOLAR INSTALLATIONS
  // ==========================================================

projects: SolarProject[] = [

  // ========================================================
  // 3 KW PROJECTS
  // ========================================================

  {
    id: 1,
    capacity: '3 kW',
    category: 'Residential',
    scheme: 'PM Surya Ghar',
    clientName: 'Client Name 01',
    location: 'Kolkata, West Bengal',
    title: '3 kW Rooftop Solar Installation',
    description:
      'Complete 3 kW residential rooftop solar installation under the PM Surya Ghar scheme.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85'
  },

  {
    id: 2,
    capacity: '3 kW',
    category: 'Residential',
    scheme: 'PM Surya Ghar',
    clientName: 'Client Name 02',
    location: 'Hooghly, West Bengal',
    title: '3 kW Residential Solar System',
    description:
      'Residential rooftop solar EPC installation with complete electrical integration.',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85'
  },

  {
    id: 3,
    capacity: '3 kW',
    category: 'Residential',
    scheme: 'PM Surya Ghar',
    clientName: 'Client Name 03',
    location: 'Barrackpore, West Bengal',
    title: '3 kW Rooftop Solar Project',
    description:
      'Grid-connected rooftop solar installation for residential electricity generation.',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85'
  },

  {
    id: 4,
    capacity: '3 kW',
    category: 'Residential',
    scheme: 'PM Surya Ghar',
    clientName: 'Client Name 04',
    location: 'North 24 Parganas, West Bengal',
    title: '3 kW Solar EPC Installation',
    description:
      'Complete rooftop solar EPC project including module installation and commissioning.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=90'
  },


  // ========================================================
  // 5 KW PROJECTS
  // ========================================================

  {
    id: 5,
    capacity: '5 kW',
    category: 'Residential',
    scheme: 'PM Surya Ghar',
    clientName: 'Client Name 05',
    location: 'Howrah, West Bengal',
    title: '5 kW Rooftop Solar Installation',
    description:
      '5 kW residential rooftop solar installation with complete inverter integration.',
    image:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85'
  },

  {
    id: 6,
    capacity: '5 kW',
    category: 'Residential',
    scheme: 'PM Surya Ghar',
    clientName: 'Client Name 06',
    location: 'Kolkata, West Bengal',
    title: '5 kW Residential Solar System',
    description:
      'High-efficiency rooftop solar system installed for residential energy savings.',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85'
  },


  // ========================================================
  // 10 KW PROJECTS
  // ========================================================

  {
    id: 7,
    capacity: '10 kW',
    category: 'Commercial',
    scheme: 'PM Surya Ghar',
    clientName: 'Commercial Client 01',
    location: 'Kolkata, West Bengal',
    title: '10 kW Commercial Solar Installation',
    description:
      '10 kW rooftop solar EPC project for commercial electricity requirements.',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85'
  },

  {
    id: 8,
    capacity: '10 kW',
    category: 'Commercial',
    scheme: 'PM Surya Ghar',
    clientName: 'Commercial Client 02',
    location: 'Howrah, West Bengal',
    title: '10 kW Rooftop Solar Project',
    description:
      'Commercial rooftop solar installation with complete electrical commissioning.',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85'
  },


  // ========================================================
  // 20 KW PROJECTS
  // ========================================================

  {
    id: 9,
    capacity: '20 kW',
    category: 'Industrial',
    scheme: 'PM Surya Ghar',
    clientName: 'Industrial Client 01',
    location: 'Hooghly, West Bengal',
    title: '20 kW Industrial Solar Installation',
    description:
      '20 kW rooftop solar EPC installation designed for higher energy requirements.',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85'
  },

  {
    id: 10,
    capacity: '20 kW',
    category: 'Industrial',
    scheme: 'PM Surya Ghar',
    clientName: 'Industrial Client 02',
    location: 'Kolkata, West Bengal',
    title: '20 kW Rooftop Solar Project',
    description:
      'Complete 20 kW solar installation including modules, inverter and commissioning.',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85'
  }

];



  // ==========================================================
  // FILTERED PROJECTS
  // ==========================================================

  get filteredProjects(): SolarProject[] {

    // SHOW EVERYTHING
    if (this.activeCategory === 'ALL') {

      return this.projects;

    }


    // SHOW ONLY SELECTED CAPACITY

    return this.projects.filter(
      (project) =>
        project.capacity === this.activeCategory
    );

  }



  // ==========================================================
  // CHANGE CAPACITY
  // ==========================================================

  setCategory(
    category: SolarCapacity
  ): void {

    this.activeCategory = category;

  }

}