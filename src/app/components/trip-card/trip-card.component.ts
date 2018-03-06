import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input() trip: object;
  constructor() { }

  ngOnInit() {
    console.log(this.trip)
  }

}
