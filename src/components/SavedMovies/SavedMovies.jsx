import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { api } from '../../utils/api';

function SavedMovies(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => async () => {
      try {
        setIsLoading(true);
        const res = await api.main.getInitialMovies();
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
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList isLoading={isLoading} movies={movies} />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
