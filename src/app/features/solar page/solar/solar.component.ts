import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-solar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.css']
})
export class SolarComponent implements OnInit {

 constructor() { }

  solarServices: any[] = [];

  ngOnInit(): void {

    this.solarServices = [
  {
    title: 'On-Grid Solar',
    slug: 'on_grid_solar',
    image: 'https://www.nextenergyindia.com/wp-content/uploads/2026/01/01-On-Grid-Solar-System.jpg',
    description: 'Efficient solar systems connected to the utility grid.'
  },
  {
    title: 'Off-Grid Solar',
    slug: 'off-grid-solar',
    image: 'https://www.nextenergyindia.com/wp-content/uploads/2026/01/02-Off-Grid-Solar-System.jpg',
    description: 'Independent solar solutions.'
  },
  {
    title: 'Hybrid Solar System',
    slug: 'hybrid-solar-system',
    image: 'https://www.nextenergyindia.com/wp-content/uploads/2026/01/03-Hybrid-Solar-System.jpg',
    description: 'Flexible solar systems.'
  },
  {
    title: 'Solar Water Heater',
    slug: 'solar-water-heater',
    image: 'assets/images/solar/water-heater.jpg',
    description: 'Eco-friendly water heating.'
  },
  {
    title: 'Solar Street Light',
    slug: 'solar-street-light',
    image: 'assets/images/solar/street-light.jpg',
    description: 'Solar-powered outdoor lighting.'
  },
  {
    title: 'Rooftop Power Plant',
    slug: 'rooftop-power-plant',
    image: 'assets/images/solar/rooftop.jpg',
    description: 'Customized rooftop solar installations.'
  }
];

  }

}