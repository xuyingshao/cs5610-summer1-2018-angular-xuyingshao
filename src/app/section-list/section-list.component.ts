import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {SessionServiceClient} from '../services/session.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private enrollmentService: EnrollmentServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router,
              private sessionService: SessionServiceClient) {
    this.route.params.subscribe((params) => this.setParams(params));
  }

  courseId = '';
  sectionName = '';
  seats = '';
  sections = [];
  loggedIn = false;
  sectionId;

  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
  }

  loadSections(courseId) {
    this.sectionService.findSectionsForCourse(courseId)
      .then((sections) => this.sections = sections);
  }

  enroll(section) {
    if (this.loggedIn) {
      this.enrollmentService.enrollStudentInSection(section._id)
        .then((response) => {
          if (response.status === 409) {
            alert('already enrolled');
          } else if (response.status === 404) {
            alert('no seats available');
          } else {
            this.sectionId = section._id;
            this.router.navigate(['profile']);
          }
        });
    } else {
      alert('please log in');
      this.router.navigate(['login']);
    }
  }

  isLoggedIn() {
    this.sessionService.getSession()
      .then(currentUser => {
        if (currentUser === undefined) {
          this.loggedIn = false;
        } else {
          this.loggedIn = true;
        }
      });
  }

  ngOnInit() {
    this.isLoggedIn();
  }

}
