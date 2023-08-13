import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => async () => {
      try {
        setIsLoading(true);
        const res = await api.main.getInitialMovies();
        setSavedMovies(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  async function removeMovie(card) {
    try {
      await api.main.deleteMovie(card._id);
      setSavedMovies((prev) => prev.filter((item) => item !== card));
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
      const res = savedMovies.filter((movie) => movie.duration <= 40);
      return res.filter(
        (movie) => isIncludes(movie.nameRU) || isIncludes(movie.nameEN)
      );
    }
    return savedMovies.filter(
      (movie) => isIncludes(movie.nameRU) || isIncludes(movie.nameEN)
    );
  }

  return (
    <>
      <Header isAuth={true} />
      <main className="saved-movies">
        <SearchForm filter={filter} handleSubmitSearch={setFilter} />

        {isLoading ? (
          <Preloader />
        ) : (
          <SavedMoviesCardList
            isLoading={isLoading}
            savedMovies={filterFilms()}
            removeMovie={removeMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
