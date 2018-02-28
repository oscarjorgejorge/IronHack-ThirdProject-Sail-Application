import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  username : String;
  password : String;
  // ... model (e,g. username: String)
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    const data = {
      username : this.username,
      password : this.password
    }
    if (form.valid) {
      this.processing = true;
      this.authService.signup(data)
        .then((result) => {return this.router.navigate(['/trips'] )})
        .catch((err) => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;
        })

      // this.someService.method(... data ...)
      //   .then((result) => {
      //     // ... handle result, reset form, etc...
      //     // ... navigate with this.router.navigate(['...'])
      //     // ... maybe turn this to false if your're staying on the page - this.processing = false;
      //   })
      //   .catch((err) => {
      //     this.error = err.error.error; // :-)
      //     this.processing = false;
      //     this.feedbackEnabled = false;
      //   });
    }
  }
}
