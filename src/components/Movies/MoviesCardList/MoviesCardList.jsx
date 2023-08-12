import { useLocation } from 'react-router';
import LoadingButton from '../LoadingButton/LoadingButton';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({ isLoading, movies }) {
  const { pathname } = useLocation();

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <div className="movies-card-list__wrapper">
          {movies.map((item) => (
            <MoviesCard key={item.id} card={item} pathname={pathname} />
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
