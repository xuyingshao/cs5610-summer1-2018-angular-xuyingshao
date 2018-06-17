import * as constants from '../constants/constant';

export class UserServiceClient {
  // USER_URL = 'http://localhost:4000/api/user';
  // LOGIN_URL = 'http://localhost:4000/api/login';
  // PROFILE_URL = 'http://localhost:4000/api/profile';
  // LOGOUT_URL = 'http://localhost:4000/api/logout';
  // SECTION_URL = 'http://localhost:4000/api/section';

  USER_URL = constants.NODE_URL + '/api/user';
  LOGIN_URL = constants.NODE_URL + '/api/login';
  PROFILE_URL = constants.NODE_URL + '/api/profile';
  LOGOUT_URL = constants.NODE_URL + '/api/logout';
  SECTION_URL = constants.NODE_URL + '/api/section';

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };

    return fetch(this.USER_URL, {
      body: JSON.stringify(user),
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  login(username, password) {
    const user = {
      username: username,
      password: password
    };

    return fetch(this.LOGIN_URL, {
      body: JSON.stringify(user),
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }


  profile() {
    return fetch(this.PROFILE_URL, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  logout() {
    return fetch(this.LOGOUT_URL, {
      method: 'post',
      credentials: 'include'
    });
  }


}
