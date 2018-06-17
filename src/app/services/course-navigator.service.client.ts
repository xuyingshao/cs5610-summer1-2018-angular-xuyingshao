import * as constants from '../constants/constant';

export class CourseNavigatorServiceClient {
  // COURSE_URL = 'http://localhost:8080/api/course';
  // MODULE_URL = 'http://localhost:8080/api/module';
  // LESSON_URL = 'http://localhost:8080/api/lesson';

  COURSE_URL = constants.JAVA_URL + '/api/course';
  MODULE_URL = constants.JAVA_URL + '/api/module';
  LESSON_URL = constants.JAVA_URL + '/api/lesson';

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/module')
      .then(response => response.json());
  }

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }

  findAllWidgetForLesson(lessonId) {
    return fetch(this.LESSON_URL + '/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
