import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';


@Component({
  selector: 'app-mytrips-page',
  templateUrl: './mytrips-page.component.html',
  styleUrls: ['./mytrips-page.component.css']
})
export class MyTripsPageComponent implements OnInit {
  showform : boolean;
  goodfeedbackEnabled : boolean;
  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.showform = false;
    this.goodfeedbackEnabled = false;
  }

  displayForm() {
    this.showform = true;
  }

  handleDisplayForm(info) {
    this.showform = info.showform;
    this.goodfeedbackEnabled = true;
    setTimeout(() => {
      this.goodfeedbackEnabled = false;
    }, 4000);
    // const data = {
    //   triptitle,

    // }
    // this.tripService.createTrip()
  }
}
