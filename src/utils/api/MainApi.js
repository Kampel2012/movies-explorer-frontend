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

  editProfile({ name, email }) {
    return this._request(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  getInitialMovies() {
    return this._request(`${this.baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  addNewMovie(card) {
    const movie = {
      ...Object.fromEntries(
        Object.entries(card).filter(
          (n) => n[0] !== 'id' && n[0] !== 'created_at' && n[0] !== 'updated_at'
        )
      ),
      image: `https://api.nomoreparties.co/${card.image.url}`,
      thumbnail: `https://api.nomoreparties.co/${card.image.formats.thumbnail.url}`,
      movieId: card.id,
    };
    return this._request(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    });
  }

  deleteMovie(id) {
    return this._request(`${this.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  // другие методы работы с API
}
