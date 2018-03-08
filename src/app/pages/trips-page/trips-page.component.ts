import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { TripService } from '../../services/trip.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-trips-page',
  templateUrl: './trips-page.component.html',
  styleUrls: ['./trips-page.component.css']
})
export class TripsPageComponent implements OnInit {
  trips: Array<any>=[];
  public carouselOne: NgxCarousel;

  constructor(private authService : AuthService, private tripService: TripService) { }

  ngOnInit() {
    this.tripService.getAllTrips()
    .then((trips) => this.trips = trips);

    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }

}
