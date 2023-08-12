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
    } catch (error) {
      console.log(error);
    }
  }

  async function removeMovie(_id) {
    try {
      await api.main.deleteMovie(_id);
      setSavedMovies((prev) => prev.filter((item) => item._id !== _id));
    } catch (error) {
      console.log(error);
    }
  }

  const [filter, setFilter] = useState({
    partOfName: '',
    isShort: false,
  });

  function filterFilms() {
    const lowerPartOfName = filter.partOfName.toLowerCase();
    const isIncludes = (item) => item.toLowerCase().includes(lowerPartOfName);

    if (filter.isShort) {
      const res = movies.filter((movie) => movie.duration <= 40);
      return res.filter(
        (movie) => isIncludes(movie.nameRU) || isIncludes(movie.nameEN)
      );
    }
    return movies.filter(
      (movie) => isIncludes(movie.nameRU) || isIncludes(movie.nameEN)
    );
  }

  return (
    <>
      <Header isAuth={true} />
      <main className="movies">
        <SearchForm filter={filter} handleSubmitSearch={setFilter} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            isLoading={isLoading}
            movies={filterFilms()}
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
