import './SavedMoviesCard.css';
import { Link } from 'react-router-dom';

function SavedMoviesCard({ pathname = '/movies', card, removeMovie }) {
  const formatTime = (totalMinuts) => {
    const hours = Math.floor(totalMinuts / 60);
    const minutes = Math.floor(totalMinuts % 60);
    return `${hours > 0 ? String(hours) + 'ч' : ''} ${String(minutes)}м`;
  };

  const bntElement = (
    <button
      onClick={async () => await removeMovie(card)}
      type="button"
      className="saved-movies-card__button">
      &#215;
    </button>
  );

  return (
    <article className="saved-movies-card">
      <div className="saved-movies-card__info">
        <h2 className="saved-movies-card__title">{card.nameRU}</h2>
        <p className="saved-movies-card__time">{formatTime(card.duration)}</p>
      </div>
      <div className="saved-movies-card__wrapper">
        <Link
          className="saved-movies-card__link"
          to={`${card.trailerLink}`}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={card.image}
            alt={card.description}
            className="saved-movies-card__image"
          />
        </Link>
      </div>
      {bntElement}
    </article>
  );
}

export default SavedMoviesCard;
