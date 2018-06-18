import {Component, OnInit} from '@angular/core';
import {SessionServiceClient} from '../services/session.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private enrollmentService: EnrollmentServiceClient,
              private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient,
              private sessionService: SessionServiceClient) {
  }

  enrollments = [];
  courses = [];
  currentUser = {};
  loggedIn = false;

  loadCourses() {
    this.enrollmentService.findEnrollmentsForStudent()
      .then(enrollments => {
        this.enrollments = enrollments;
      })
      .then(enrollments => {
        this.enrollments.map((enrollment) => {
          this.courseService.findCourseById(enrollment.section.courseId)
            .then(course => {
              if (this.courses.indexOf(course) === -1) {
                this.courses.push(course);
              }
            });
        });
      });
  }

  isLoggedIn() {
    this.sessionService.getSession()
      .then(currentUser => {
        if (currentUser === undefined) {
          this.loggedIn = false;
        } else {
          this.loggedIn = true;
          this.currentUser = currentUser;
          this.loadCourses();
        }
      });
  }

  ngOnInit() {
    this.isLoggedIn();
  }
}
