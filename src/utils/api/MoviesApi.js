import { Api } from './api';

export class MoviesApi extends Api {
  constructor({ baseUrl }) {
    super();
    this.baseUrl = baseUrl;
  }

  getInitialMovies() {
    return this._request(`${this.baseUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // другие методы работы с API
}
