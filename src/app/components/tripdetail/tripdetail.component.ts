import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tripdetail',
  templateUrl: './tripdetail.component.html',
  styleUrls: ['./tripdetail.component.css']
})
export class TripdetailComponent implements OnInit {
  @Input() trip: object;

  constructor() { }

  ngOnInit() {
  }

}
