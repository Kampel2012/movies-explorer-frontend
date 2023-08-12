import { useEffect, useState } from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { api } from '../../utils/api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => async () => {
      try {
        setIsLoading(true);
        const res = await api.movies.getInitialMovies();
        console.log(res);
        const savedMoviesRes = await api.main.getInitialMovies();
        console.log(savedMoviesRes);
        setMovies(res);
        setSavedMovies(savedMoviesRes);
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
        <MoviesCardList
          isLoading={isLoading}
          movies={movies}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
