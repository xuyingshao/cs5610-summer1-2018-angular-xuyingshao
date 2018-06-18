import {Component, OnInit} from '@angular/core';
import {UserServiceClient} from '../services/user.service.client';
import {User} from '../models/user.model.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
              private router: Router,
              private enrollmentService: EnrollmentServiceClient) {
  }

  user: User = new User();
  enrollments = [];

  logout() {
    this.userService.logout()
      .then(() => this.router.navigate(['login']));
  }

  unenroll(sectionId) {
    this.enrollmentService.unenrollStudentFromSection(sectionId)
      .then(() => this.loadEnrollments());
  }

  loadEnrollments() {
    this.enrollmentService.findEnrollmentsForStudent()
      .then(enrollments => this.enrollments = enrollments);
  }

  update() {
    this.userService.updateProfile(this.user)
      .then(() => this.loadEnrollments());
  }


  ngOnInit() {
    this.userService.profile()
      .then((user) => {
        if (user === undefined) {
          this.router.navigate(['login']);
        } else {
          this.user = user;
        }
      });
    this.loadEnrollments();
  }
}
