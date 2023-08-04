import LoadingButton from '../LoadingButton/LoadingButton';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      <div className="movies-card-list__container">
        <div className="movies-card-list__wrapper">
          <MoviesCard isSaved={false} />
          <MoviesCard isSaved={true} />
          <MoviesCard isSaved={true} />
          <MoviesCard isSaved={true} />
          <MoviesCard isSaved={true} />
          <MoviesCard isSaved={true} />
          <MoviesCard isSaved={true} />
        </div>
        <div className="movies-card__load">
          {false ? <Preloader /> : <LoadingButton />}
        </div>
      </div>
    </section>
  );
}

export default MoviesCardList;
