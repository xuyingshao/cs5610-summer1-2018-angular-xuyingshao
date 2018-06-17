import * as constants from '../constants/constant';

export class CourseServiceClient {
  // COURSE_URL = 'http://localhost:8080/api/course';
  COURSE_URL = constants.JAVA_URL + '/api/course';

  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }

  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
