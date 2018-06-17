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

  constructor(private service: UserServiceClient,
              private router: Router,
              private enrollmentService: EnrollmentServiceClient) {
  }

  // user: User = new User();
  user = {};
  enrollments = [];

  logout() {
    this.service.logout()
      .then(() => this.router.navigate(['login']));
  }

  unenroll(sectionId) {
    this.enrollmentService.unenrollStudentFromSection(sectionId);
  }

  ngOnInit() {
    this.service.profile()
      .then(user => this.user = user);

    this.enrollmentService.findEnrollmentsForStudent()
      .then((enrollments) => {
        this.enrollments = enrollments;
      });

  }
}
