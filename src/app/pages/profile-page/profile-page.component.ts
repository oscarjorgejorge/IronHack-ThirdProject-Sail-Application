import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  feedbackEnabled = false;
  goodfeedbackEnabled = false;
  error = null;
  processing = false;
  username : String;
  email : String;
  description: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    const user = this.authService.getUser();
    this.username = user.username;
    this.email = user.email;
    this.description = user.description;
  }


  handleUpdateProfile(newData) {
    this.email = newData.email;
    this.description = newData.description;
    const data = {
      email : this.email,
      username : this.username,
      description : this.description
    }
    this.authService.edit(data)
    .then()
    .catch((err) => {
      this.error = err.error.error;
      this.processing = false;
      this.feedbackEnabled = false;
    })
  }

  delete() {
    this.authService.delete()
    .then(() => this.router.navigate(['/trips']))
  }
 
}
