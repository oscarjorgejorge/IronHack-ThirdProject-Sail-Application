import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytrips-page',
  templateUrl: './mytrips-page.component.html',
  styleUrls: ['./mytrips-page.component.css']
})
export class MyTripsPageComponent implements OnInit {
  showform : boolean;
  constructor() { }

  ngOnInit() {
    this.showform = false;
  }

  displayForm() {
    this.showform = true;
  }

  handleDisplayForm(status) {
    this.showform = status;
  }
}
