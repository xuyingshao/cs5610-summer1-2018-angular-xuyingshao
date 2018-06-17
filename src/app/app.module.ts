import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {WhiteBoardComponent} from './white-board/white-board.component';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {CourseNavigatorServiceClient} from './services/course-navigator.service.client';
import {CourseServiceClient} from './services/course.service.client';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {Routing} from './app.routing';
import {ModuleListComponent} from './module-list/module-list.component';
import {ModuleServiceClient} from './services/module.service.client';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {LessonServiceClient} from './services/lesson.service.client';
import {WidgetListComponent} from './widget-list/widget-list.component';
import {WidgetServiceClient} from './services/widget.service.client';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {UserServiceClient} from './services/user.service.client';
import { SectionListComponent } from './section-list/section-list.component';
import {SectionServiceClient} from './services/section.service.client';
import {EnrollmentServiceClient} from './services/enrollment.service.client';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    WhiteBoardComponent,
    CourseNavigatorComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    WidgetListComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient,
    EnrollmentServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
