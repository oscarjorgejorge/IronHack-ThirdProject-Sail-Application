import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Trip } from '../../class/trip';

@Component({
  selector: 'app-create-new-trip-form',
  templateUrl: './create-new-trip-form.component.html',
  styleUrls: ['./create-new-trip-form.component.css']
})
export class CreateNewTripFormComponent implements OnInit {
  @Output() save = new EventEmitter<object>();

  @Input() trip: Trip;

  feedbackEnabled : boolean;
  error = null;
  processing : boolean;
  constructor() { }

  ngOnInit() {
    this.processing = false;
    this.feedbackEnabled = false;

    if (!this.trip) {
      this.trip = {};
    }
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.save.emit(this.trip)
    }
  }

}
