import { Component, OnInit } from '@angular/core';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-trips-page',
  templateUrl: './trips-page.component.html',
  styleUrls: ['./trips-page.component.css']
})
export class TripsPageComponent implements OnInit {
  trips: Array<any>=[];

  constructor(private authService : AuthService, private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getAllTrips()
    .then((trips) => this.trips = trips);
  }

}
