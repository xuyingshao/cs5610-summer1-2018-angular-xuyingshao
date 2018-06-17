import * as constants from '../constants/constant';

export class SectionServiceClient {
  // COURSE_URL = 'http://localhost:4000/api/course';
  // SECTION_URL = 'http://localhost:4000/api/section';
  COURSE_URL = constants.NODE_URL + '/api/course';
  SECTION_URL = constants.NODE_URL + '/api/section';

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

  findSectionById(sectionId) {
    return fetch(this.SECTION_URL + '/' + sectionId)
      .then(response => response.json());
  }

  deleteSection(sectionId) {
    return fetch(this.SECTION_URL + '/' + sectionId, {
      method: 'delete'
    })
      .then(response => response.json());
  }

  updateSection(sectionId, section) {
    return fetch(this.SECTION_URL + '/' + sectionId, {
      method: 'put',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());
  }
}
