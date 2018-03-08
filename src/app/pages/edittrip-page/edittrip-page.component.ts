import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { TripService } from '../../services/trip.service';
import { Trip } from '../../class/trip';


@Component({
  selector: 'app-edittrip-page',
  templateUrl: './edittrip-page.component.html',
  styleUrls: ['./edittrip-page.component.css']
})
export class EdittripPageComponent implements OnInit {
  tripId: Number;
  trip: Trip;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tripService: TripService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.tripId = params['id'];
        this.tripService.getTrip(this.tripId)
          .then((trip) => {
            this.trip = trip.result;
          });
      });
  }

  handleEditTrip(data) {
    this.tripService.editTrip(data)
      .then(() => this.router.navigate(['/my-trips']))
  }
}
