import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) {
  }

  username;
  password;
  password2;

  register(username, password, password2) {
    if (username === undefined) {
      alert('username cannot be empty!');
    } else if (password === undefined || password2 === undefined) {
      alert('password cannot be empty!');
    } else if (password !== password2) {
      alert('passwords don\'t match!');
    } else {
      this.userService.register(username, password)
        .then((response) => {
          if (response.status === 409) {
            alert('username already exists!');
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }

  ngOnInit() {}
}
