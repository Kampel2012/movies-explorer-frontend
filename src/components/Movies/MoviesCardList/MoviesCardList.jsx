import { useLocation } from 'react-router';
import LoadingButton from '../LoadingButton/LoadingButton';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <div className="movies-card-list__wrapper">
          <MoviesCard isSaved={false} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
          <MoviesCard isSaved={true} pathname={pathname} />
        </div>
        <div className="movies-card__load">
          {false ? <Preloader /> : <LoadingButton />}
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
