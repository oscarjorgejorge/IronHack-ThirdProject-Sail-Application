import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../class/trip';


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  @Output() deactivate = new EventEmitter<any>();

  @Input() trips: Array<Trip>;
  @Input() showbuttons: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleDesactivateTrip(id) {
    this.deactivate.emit(id);
    console.log(id)
  }

}
