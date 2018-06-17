import * as constants from '../constants/constant';

export class WidgetServiceClient {
  // LESSON_URL = 'http://localhost:8080/api/lesson';
  LESSON_URL = constants.JAVA_URL + '/api/lesson';

  findAllWidgetsForLesson(lessonId) {
    return fetch(this.LESSON_URL + '/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
