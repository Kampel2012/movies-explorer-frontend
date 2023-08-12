import { Api } from './api';

export class ApiProfile extends Api {
  constructor({ baseUrl }) {
    super();
    this.baseUrl = baseUrl;
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
