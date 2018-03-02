import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() edit = new EventEmitter<object>();
  @Input() email: String;
  @Input() description: String;
  feedbackEnabled = false;
  goodfeedbackEnabled = false;
  error = null;
  processing = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form)  {
    this.error = '';
    this.feedbackEnabled = true;
    const data = {
      email : this.email,
      description : this.description
    }
    if (form.valid) {
      this.processing = true;
      this.edit.emit(data);

      this.processing = false;
      this.feedbackEnabled = false;
      this.goodfeedbackEnabled = true;
      setTimeout(() => {
        this.goodfeedbackEnabled = false;
      }, 4000);
    }
  }
}