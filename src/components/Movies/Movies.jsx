import { useEffect, useState } from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { api } from '../../utils/api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => async () => {
      try {
        setIsLoading(true);
        const res = await api.movies.getInitialMovies();
        console.log(res);
        setMovies(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return (
    <>
      <Header isAuth={true} />
      <main className="movies">
        <SearchForm />
        <MoviesCardList isLoading={isLoading} movies={movies} />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
