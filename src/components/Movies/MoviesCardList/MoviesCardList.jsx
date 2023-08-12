import { useLocation } from 'react-router';
import LoadingButton from '../LoadingButton/LoadingButton';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ isLoading, movies, savedMovies }) {
  const { pathname } = useLocation();
  const checkSave = (item) =>
    savedMovies.find((mov) => mov.movieId === item.id);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <div className="movies-card-list__wrapper">
          {movies.map((item) => (
            <MoviesCard
              key={item.id}
              card={item}
              pathname={pathname}
              _id={checkSave(item) ? checkSave(item)._id : null}
            />
          ))}
        </div>
        <div className="movies-card-list__load">
          {isLoading ? <Preloader /> : <LoadingButton />}
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
