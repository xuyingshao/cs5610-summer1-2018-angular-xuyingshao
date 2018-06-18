import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../services/module.service.client';
import {Course} from '../models/course.model.client';
import {Module} from '../models/module.model.client';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private moduleService: ModuleServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  courseId = 0;
  moduleId = 0;
  modules: Module[] = [];

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];

    if (this.courseId !== undefined) {
      this.loadModules(this.courseId);
    }
  }

  loadModules(courseId) {
    this.moduleService.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }

}
