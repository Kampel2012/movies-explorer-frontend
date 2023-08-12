import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';

function SavedMovies(props) {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => async () => {
      try {
        setIsLoading(true);
        const res = await api.main.getInitialMovies();
        console.log(res);
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

  return (
    <>
      <Header isAuth={true} />
      <main className="saved-movies">
        <SearchForm />

        {isLoading ? (
          <Preloader />
        ) : (
          <SavedMoviesCardList
            isLoading={isLoading}
            savedMovies={savedMovies}
            removeMovie={removeMovie}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
