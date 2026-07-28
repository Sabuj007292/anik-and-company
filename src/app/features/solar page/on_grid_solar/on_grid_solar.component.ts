import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ContactComponent } from "../../contact/contact.component";

@Component({
  selector: 'app-on_grid_solar',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './on_grid_solar.component.html',
  styleUrls: ['./on_grid_solar.component.css']
})
export class On_grid_solarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   activeIndex = 0;

  points = [
    {
      title: 'Grid Connectivity and Net Metering:',
      content: 'On-grid solar setups are connected to the utility grid, allowing you to export excess solar energy back to the grid and receive credits. Through net metering, you can balance your energy consumption and production, effectively reducing your electricity bills by using the grid as a virtual battery.'
    },
    {
      title: 'Reliability and Backup:',
      content: 'Electricity is supplied directly from the solar system during the day. When production is insufficient, power is automatically imported from the utility grid, ensuring a reliable energy supply.'
    },
    {
      title: 'Cost Savings and ROI:',
      content: 'An on-grid solar system significantly reduces monthly electricity bills and provides an excellent return on investment over its lifetime.'
    },
    {
      title: 'System Sizing and Design:',
      content: 'The solar system should be designed based on your electricity consumption, roof space, and future energy requirements to maximize efficiency.'
    },
    {
      title: 'Environmental Impact and Green Energy:',
      content: 'Using solar energy reduces carbon emissions and dependence on fossil fuels, contributing to a cleaner and more sustainable environment.'
    }
  ];

}
