import {Component, OnInit} from '@angular/core';
import {WidgetServiceClient} from '../services/widget.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})

export class WidgetListComponent implements OnInit {

  constructor(private service: WidgetServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId = 0;
  moduleId = 0;
  lessonId = 0;
  widgets = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];

    if (this.lessonId !== undefined) {
      this.loadWidgets(this.lessonId);
    }
  }


  loadWidgets(lessonId) {
    this.service.findAllWidgetsForLesson(lessonId)
      .then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
  }
}
