import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../../services/trip.service';

@Component({
  selector: 'app-trip-detail-page',
  templateUrl: './trip-detail-page.component.html',
  styleUrls: ['./trip-detail-page.component.css']
})
export class TripDetailPageComponent implements OnInit {
  tripId: Number;
  trip: object;


  constructor(private route: ActivatedRoute, private tripService: TripService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.tripId = params['id']);
  this.tripService.getTrip(this.tripId)
  .then((trip) => this.trip = trip);
  }

}
