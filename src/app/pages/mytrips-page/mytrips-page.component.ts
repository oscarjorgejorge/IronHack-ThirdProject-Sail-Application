import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-mytrips-page',
  templateUrl: './mytrips-page.component.html',
  styleUrls: ['./mytrips-page.component.css']
})
export class MyTripsPageComponent implements OnInit {
  user : any;
  showform : boolean;
  showbuttons : boolean;
  goodfeedbackEnabled : boolean;
  trips: Array<any>=[];

  constructor(private authService : AuthService, private tripService: TripService) { }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.showform = false;
    this.showbuttons = true;
    this.goodfeedbackEnabled = false;

    this.tripService.getMyTrips()
    .then((trips) => this.trips = trips);
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
    const data = {
      user: this.user, 
      tripTitle: info.tripTitle,
      description: info.description,
      image: info.image,
    }
    this.trips.push(data);
    this.tripService.createTrip(data)
  }
}
