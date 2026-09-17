import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooftop-solar',
  templateUrl: './rooftop-solar.component.html',
  styleUrls: ['./rooftop-solar.component.css']
})
export class RooftopSolarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
