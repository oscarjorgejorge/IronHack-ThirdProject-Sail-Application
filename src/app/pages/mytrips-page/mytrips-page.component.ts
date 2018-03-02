import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytrips-page',
  templateUrl: './mytrips-page.component.html',
  styleUrls: ['./mytrips-page.component.css']
})
export class MyTripsPageComponent implements OnInit {
  showform : boolean;
  goodfeedbackEnabled : boolean;
  constructor() { }

  ngOnInit() {
    this.showform = false;
    this.goodfeedbackEnabled = false;
  }

  displayForm() {
    this.showform = true;
  }

  handleDisplayForm(status) {
    this.showform = status;
    this.goodfeedbackEnabled = true;
    setTimeout(() => {
      this.goodfeedbackEnabled = false;
    }, 4000);
  }
}
