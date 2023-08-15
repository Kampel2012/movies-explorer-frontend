import { useEffect, useState } from 'react';
import './Movies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import { api } from '../../utils/api';
import Preloader from './Preloader/Preloader';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

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
  const [isShowPopup, setIsShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState('');
  const isEmptyQuestion = filter.partOfName === '';

  useEffect(() => {
    const getSavedMovies = async () => {
      try {
        setIsLoading(true);
        const savedMoviesRes = await api.main.getInitialMovies();
        setSavedMovies(savedMoviesRes);
      } catch (error) {
        setIsShowPopup(true);
        setErrorPopup(
          'Произошла ошибка при загрузке сохранённых фильмов. Попробуйте еще раз позднее.'
        );
      } finally {
        setIsLoading(false);
      }
    };
    getSavedMovies();
  }, []);

  async function getMovies(filter) {
    if (filter.partOfName === '') return;
    if (movies.length > 0) return;

    try {
      setIsLoading(true);
      const res = await api.movies.getInitialMovies();
      const savedMoviesRes = await api.main.getInitialMovies();
      setMovies(res);
      setSavedMovies(savedMoviesRes);
    } catch (error) {
      setErrorPopup(
        'Произошла ошибка при загрузке фильмов. Попробуйте еще раз позднее.'
      );
      setIsShowPopup(true);
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
      return res;
    } catch (error) {
      setErrorPopup(
        'Произошла ошибка при сохранении фильма. Попробуйте еще раз позднее.'
      );
      setIsShowPopup(true);
    }
  }

  async function removeMovie(_id) {
    try {
      const res = await api.main.deleteMovie(_id);
      setSavedMovies((prev) => prev.filter((item) => item._id !== _id));
      return res;
    } catch (error) {
      setIsShowPopup(true);
      setErrorPopup(
        'Произошла ошибка при удалении фильма. Попробуйте еще раз позднее.'
      );
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
      <Header />
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
            isEmptyQuestion={isEmptyQuestion}
          />
        )}
      </main>
      <Footer />
      <InfoTooltip
        isOpen={isShowPopup}
        onClose={setIsShowPopup}
        infoTooltipMessage={{ error: errorPopup }}
      />
    </>
  );
}

export default Movies;
