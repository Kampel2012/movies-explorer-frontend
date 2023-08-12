import { Api } from './api';

export class ApiMovies extends Api {
  constructor({ baseUrl }) {
    super();
    this.baseUrl = baseUrl;
  }

  getInitialMovies() {
    return this._request(`${this.baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  addNewMovie({ name, link }) {
    return this._request(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        link,
      }),
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

  changeLikeMovieStatus(id, state) {
    return this._request(`${this.baseUrl}/movies/${id}/likes`, {
      method: state,
      headers: {
        authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  // другие методы работы с API
}
