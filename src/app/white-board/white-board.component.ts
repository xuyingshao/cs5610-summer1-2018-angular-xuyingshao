import {Component, OnInit} from '@angular/core';
import {SessionServiceClient} from '../services/session.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

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

  loadCourses() {
    this.enrollmentService.findEnrollmentsForStudent()
      .then(enrollments => {
        this.enrollments = enrollments;
      })
      .then(enrollments => {
        this.enrollments.map((enrollment) => {
          this.courseService.findCourseById(enrollment.section.courseId)
            .then(course => {
              console.log(this.courses.indexOf(course));

              if (this.courses.indexOf(course) === -1) {
                this.courses.push(course);
              }
            });
        });
      });
  }

  // isLoggedIn() {
  //   alert('loggedin');
  //   this.sessionService.getSession()
  //     .then(currentUser => this.currentUser = currentUser);
  //
  //   console.log(this.currentUser);
  // }

  ngOnInit() {
    this.loadCourses();
    // this.isLoggedIn();
    // console.log(this.currentUser);
  }
}
