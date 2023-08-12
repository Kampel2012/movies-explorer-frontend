import { MainApi } from './MainApi';
import { MoviesApi } from './MoviesApi';

export const main = new MainApi({
  baseUrl: `https://api.movies.anton.glazunov.nomoredomains.xyz`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const movies = new MoviesApi({
  baseUrl: ` https://api.nomoreparties.co/beatfilm-movies`,
});

export const api = {
  main,
  movies,
};
