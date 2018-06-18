import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  username;
  password;

  login(username, password) {
    this.userService.login(username, password)
      .then((response) => {
        if (response.status !== 404) {
          this.router.navigate(['profile']);
        } else {
          alert('user does not exist!');
        }
      });
  }

  ngOnInit() {
  }
}
