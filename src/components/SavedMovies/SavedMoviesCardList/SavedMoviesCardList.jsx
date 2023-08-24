import './SavedMoviesCardList.css';
import Preloader from '../../Movies/Preloader/Preloader';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

function SavedMoviesCardList({
  isLoading,
  savedMovies,
  removeMovie,
  isEmptyQuestion,
}) {
  return (
    <section className="saved-movies-card-list">
      <div className="saved-movies-card-list__container">
        {!isEmptyQuestion && savedMovies.length === 0 && (
          <p className="movies-card-list__message">
            По данному запросу ничего не найдено
          </p>
        )}
        <div className="saved-movies-card-list__wrapper">
          {savedMovies.map((item) => (
            <SavedMoviesCard
              key={item._id}
              card={item}
              removeMovie={removeMovie}
            />
          ))}
        </div>
        <div className="saved-movies-card-list__load">
          {isLoading && <Preloader />}
        </div>
      </div>
    </section>
  );
}

export default SavedMoviesCardList;
