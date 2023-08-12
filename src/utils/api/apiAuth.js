import { Api } from './api';

export class ApiAuth extends Api {
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

  // другие методы работы с API
}
