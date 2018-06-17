import * as constants from '../constants/constant';

export class SessionServiceClient {
  SESSION_URL = constants.NODE_URL + '/api/session';

   getSession() {
    return fetch(this.SESSION_URL + '/get/currentUser')
      .then(response => {

        console.log('in session service');
        console.log(response.json());

        return response.json();
      });
  }
}
