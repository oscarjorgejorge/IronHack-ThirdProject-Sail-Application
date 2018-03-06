import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {

  @Input() trips: Array<object>;

  constructor() { }

  ngOnInit() {
  }

}
