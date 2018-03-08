import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../class/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Output() deactivate = new EventEmitter<any>();
  @Input() trip: Trip;
  @Input() showbuttons: boolean;

  constructor() { }

  ngOnInit() {
    this.trip.description = this.trip.description.split(" ").slice(0, 30).join(" ") + "...";
  }

  deactivateTrip() {
    this.trip.isAvailable = false;
    const id = this.trip._id;
    this.deactivate.emit(id);
  }
}
