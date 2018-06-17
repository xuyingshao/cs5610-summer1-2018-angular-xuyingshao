import { Component, OnInit } from '@angular/core';
import { CourseNavigatorServiceClient } from '../services/course-navigator.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) {}

  courses = [];
  modules = [];
  lessons = [];
  widgets = [];
  selectedCourseId = 0;
  selectedModuleId = 0;
  selectedLessonId = 0;
  selectedWidgetId = 0;


  selectCourse(courseId) {
    this.selectedCourseId = courseId;
    this.service.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
    this.lessons = [];
    this.widgets = [];
  }

  selectModule(moduleId) {
    this.selectedModuleId = moduleId;
    this.service.findAllLessonsForModule(this.selectedCourseId, moduleId)
      .then(lessons => this.lessons = lessons);
    this.widgets = [];
  }

  selectLesson(lessonId) {
    this.selectedLessonId = lessonId;
    this.service.findAllWidgetForLesson(lessonId)
      .then(widgets => this.widgets = widgets);
  }

  selectWidget(widgetId) {
    this.selectedWidgetId = widgetId;
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
