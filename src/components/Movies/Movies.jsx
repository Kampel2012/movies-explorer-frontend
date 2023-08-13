import { useState } from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { api } from '../../utils/api';
import Preloader from './Preloader/Preloader';

function Movies() {
  const initialMovies = JSON.parse(localStorage.getItem('foundMovies')) || [];
  const initialFilter = JSON.parse(localStorage.getItem('filter')) || {
    partOfName: '',
    isShort: false,
  };
  const [movies, setMovies] = useState(initialMovies);

  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filter, setFilter] = useState(initialFilter);

  async function getMovies(filter) {
    if (filter.partOfName === '') {
      setMovies([]);
      return;
    }

    if (movies.length > 0) return;

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
  }

  async function handleOnSubmit(filter) {
    await getMovies(filter);
    setFilter(filter);
    localStorage.setItem(
      'foundMovies',
      JSON.stringify(filterFilms({ ...filter, isShort: false }))
    );
    localStorage.setItem('filter', JSON.stringify(filter));
  }

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

  function filterFilms(filter) {
    const lowerPartOfName = filter?.partOfName.toLowerCase();
    const isIncludes = (item) => item.toLowerCase().includes(lowerPartOfName);

    if (filter?.isShort) {
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
        <SearchForm filter={filter} handleSubmitSearch={handleOnSubmit} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            isLoading={isLoading}
            movies={filterFilms(filter)}
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
