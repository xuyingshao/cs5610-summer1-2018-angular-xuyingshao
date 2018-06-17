import * as constants from '../constants/constant';

export class LessonServiceClient {
  // COURSE_URL = 'http://localhost:8080/api/course';
  COURSE_URL = constants.JAVA_URL + '/api/course';

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
