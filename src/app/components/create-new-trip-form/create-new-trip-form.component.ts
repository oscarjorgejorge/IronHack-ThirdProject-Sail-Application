import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-new-trip-form',
  templateUrl: './create-new-trip-form.component.html',
  styleUrls: ['./create-new-trip-form.component.css']
})
export class CreateNewTripFormComponent implements OnInit {
  @Output() display = new EventEmitter<boolean>();
  feedbackEnabled : boolean;
  error = null;
  processing : boolean;
  tripTitle : String;
  description : String;
  constructor() { }

  ngOnInit() {
    this.processing = false;
    this.feedbackEnabled = false;
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.display.emit(false)
      console.log('functiona')
    }
  }




}
