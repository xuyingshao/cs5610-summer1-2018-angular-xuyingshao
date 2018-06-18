import * as constants from '../constants/constant';

export class SessionServiceClient {
  SESSION_URL = constants.NODE_URL + '/api/session';

   getSession() {
    return fetch(this.SESSION_URL + '/get/currentUser', {
      method: 'get',
      credentials: 'include'
    })
      .then(response => {
        if (response.status !== 404) {
          return response.json();
        }
      });
  }
}
