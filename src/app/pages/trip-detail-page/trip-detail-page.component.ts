import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-trip-detail-page',
  templateUrl: './trip-detail-page.component.html',
  styleUrls: ['./trip-detail-page.component.css']
})
export class TripDetailPageComponent implements OnInit {
  tripId: Number;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.tripId = Number(params['id']));
  }

}
