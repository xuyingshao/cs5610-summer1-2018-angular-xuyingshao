import * as constants from '../constants/constant';

export class SectionServiceClient {
  // COURSE_URL = 'http://localhost:4000/api/course';
  // SECTION_URL = 'http://localhost:4000/api/section';
  COURSE_URL = constants.NODE_URL + '/api/course';


  createSection(courseId, name, seats) {
    const section = {
      name: name,
      seats: seats,
      courseId: courseId
    };

    return fetch(this.COURSE_URL + '/' + courseId + '/section', {
      method: 'post',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId + '/section')
      .then(response => response.json());
  }


}
