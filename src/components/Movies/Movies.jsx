import { useEffect, useState } from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { api } from '../../utils/api';
import Preloader from './Preloader/Preloader';

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

  async function saveMovie(card) {
    try {
      const res = await api.main.addNewMovie(card);
      setSavedMovies((prev) => [...prev, res]);
      console.log('save');
    } catch (error) {
      console.log(error);
    }
  }

  async function removeMovie(_id) {
    try {
      await api.main.deleteMovie(_id);
      setSavedMovies((prev) => prev.filter((item) => item._id !== _id));
      console.log('remove');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Header isAuth={true} />
      <main className="movies">
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            isLoading={isLoading}
            movies={movies}
            savedMovies={savedMovies}
            saveMovie={saveMovie}
            removeMovie={removeMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
