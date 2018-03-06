import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Output() deactivate = new EventEmitter<any>();
  @Input() trip: object;
  @Input() isAvailable: boolean;
  @Input() tripId: any;
  @Input() showbuttons: boolean;

  constructor() { }

  ngOnInit() {
  }

  deactivateTrip() {
    console.log('funciona')
    this.isAvailable = false;
    // const id = 
    this.deactivate.emit(this.tripId);
  }
}
