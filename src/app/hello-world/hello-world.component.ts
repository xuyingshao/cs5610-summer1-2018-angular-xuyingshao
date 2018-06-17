import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  courseTitle: string;

  message = 'hello world component';

  courses = [
    {title: 'CS5200', id: 123},
    {title: 'CS5610', id: 234},
    {title: 'CS3200', id: 345},
    {title: 'CS4550', id: 456}
  ];

  deleteCourse(courseId) {
    this.courses = this.courses.filter(course => course.id !== courseId);
  }

  addCourse(courseTitle) {
    const largestId = Math.max.apply(Math, this.courses.map(
      function(course) {
        return course.id;
      }
    ));
    this.courses.push({title: courseTitle, id: largestId + 1});
  }

  constructor() { }

  ngOnInit() {
  }

}
