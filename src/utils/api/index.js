import { ApiAuth } from './apiAuth';
import { ApiMovies } from './apiMovies';
import { ApiProfile } from './apiProfile';

export const apiAuth = new ApiAuth({
  baseUrl: `https://api.movies.anton.glazunov.nomoredomains.xyz`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiProfile = new ApiProfile({
  baseUrl: `https://api.movies.anton.glazunov.nomoredomains.xyz`,
});

export const apiMovies = new ApiMovies({
  baseUrl: `https://api.movies.anton.glazunov.nomoredomains.xyz`,
});

export const api = {
  apiAuth,
  apiProfile,
  apiMovies,
};
