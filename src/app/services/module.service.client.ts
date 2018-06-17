import * as constants from '../constants/constant';

export class ModuleServiceClient {
  // COURSE_URL = 'http://localhost:8080/api/course';
  COURSE_URL = constants.JAVA_URL + '/api/course';

  findAllModulesForCourse(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/module')
      .then(response => response.json());
  }
}
