import { Api } from './api';

export class MainApi extends Api {
  constructor({ baseUrl, headers }) {
    super();
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  signup({ email, password, name }) {
    return this._request(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        password,
        email,
        name,
      }),
    });
  }

  signin({ email, password }) {
    return this._request(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });
  }

  checkToken(token) {
    return this._request(`${this.baseUrl}/users/me`, {
      headers: { ...this.headers, Authorization: `Bearer ${token}` },
    });
  }

  getUserInfoData() {
    return this._request(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  editProfile({ name, about }) {
    return this._request(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }

  editProfileAvatar(link) {
    return this._request(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: link,
      }),
    });
  }

  // другие методы работы с API
}
