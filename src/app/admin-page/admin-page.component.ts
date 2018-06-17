import {Component, OnInit} from '@angular/core';
import {SectionServiceClient} from '../services/section.service.client';
import {CourseServiceClient} from '../services/course.service.client';
import {Section} from '../models/section.model.client';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient) {
  }

  courses = [];
  selectedCourse = '';
  sections = [];
  selectedSection = '';
  section: Section = new Section();
  sectionName = '';
  seats = '';

  // editing = false;

  findAllCourses() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse(courseId) {
    this.selectedCourse = courseId;
    this.loadSections(courseId);
  }

  selectSection(sectionId) {
    this.selectedSection = sectionId;
    this.sectionService.findSectionById(sectionId)
      .then(section => this.section = section);
  }

  createSection(sectionName, seats) {
    this.sectionService.createSection(this.selectedCourse, sectionName, seats)
      .then(() => this.loadSections(this.selectedCourse));
  }

  loadSections(courseId) {
    this.sectionService.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  removeSection(sectionId) {
    this.sectionService.deleteSection(sectionId)
      .then(() => this.loadSections(this.selectedCourse));
  }

  // enableEditing() {
  //   this.editing = true;
  // }

  updateSection(sectionId, sectionName, seats) {
    this.sectionService.updateSection(sectionId, {
      courseId: this.selectedCourse,
      name: sectionName,
      seats: seats
    })
      .then(() => this.loadSections(this.selectedCourse));
  }

  ngOnInit() {
    this.findAllCourses();
  }
}
