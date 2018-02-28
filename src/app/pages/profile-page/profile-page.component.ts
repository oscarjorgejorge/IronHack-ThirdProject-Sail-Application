import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  username : String;
  password : String;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getUser();
    this.username = user.username;
    this.password = user.password;

    
  }

}
