import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../../class/trip';

@Component({
  selector: 'app-tripdetail',
  templateUrl: './tripdetail.component.html',
  styleUrls: ['./tripdetail.component.css']
})
export class TripdetailComponent implements OnInit {
  @Input() trip: Trip;

  constructor() { }

  ngOnInit() {
  }

}
