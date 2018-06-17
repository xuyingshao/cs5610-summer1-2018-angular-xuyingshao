import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';
import {Section} from '../models/section.model.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: EnrollmentServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) {
    this.route.params.subscribe((params) => this.setParams(params));
  }

  courseId = '';
  sectionName = '';
  seats = '';
  sections = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.loadSections(this.courseId);
  }

  loadSections(courseId) {
    this.sectionService.findSectionsForCourse(courseId)
      .then((sections) => this.sections = sections);
  }

  enroll(section) {
    this.service.enrollStudentInSection(section._id)
      .then((response) => {
        if (response.status === 409) {
          alert('already enrolled');
        } else if (response.status === 404) {
          alert('no seats available');
        } else {
          this.router.navigate(['profile']);
        }
      });
  }

  ngOnInit() {
  }

}
