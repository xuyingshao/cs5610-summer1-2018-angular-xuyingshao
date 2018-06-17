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
    this.route.params.subscribe(params => this.setContext(params));
  }

  // courseId = 0;
  // moduleId = 0;
  // lessonId = 0;
  context;
  widgets = [];    // FIXME, strongly typed, widget model

  // setParams(params) {
  //   this.courseId = params['courseId'];
  //   this.moduleId = params['moduleId'];
  //   this.lessonId = params['lessonId'];
  //
  //   this.loadWidgets(this.lessonId);
  // }

  setContext(params) {
    this.context = params;
    this.loadWidgets(params.lessonId);
  }

  loadWidgets(lessonId) {
    // console.log(this.lessonId);   // FIXME, delete
    this.service.findAllWidgetsForLesson(lessonId)
      .then(widgets => this.widgets = widgets);
    // this.widgets.forEach(widget => console.log(widget.widgetType));    // FIXME, delete
  }

  ngOnInit() {
  }
}
