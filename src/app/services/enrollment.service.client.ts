import * as constants from '../constants/constant';

export class EnrollmentServiceClient {
  SECTION_URL = constants.NODE_URL + '/api/section';

  findEnrollmentsForStudent() {
    return fetch(constants.NODE_URL + '/api/student/section',
      {
        method: 'get',
        credentials: 'include'
      })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    return fetch(this.SECTION_URL + '/' + sectionId + '/enroll', {
      method: 'post',
      credentials: 'include'
    });
  }

  unenrollStudentFromSection(sectionId) {
    return fetch(this.SECTION_URL + '/' + sectionId + '/enroll', {
      method: 'delete',
      credentials: 'include'
    });
  }
}
