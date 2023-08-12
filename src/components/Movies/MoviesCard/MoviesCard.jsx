import './MoviesCard.css';
import markcheck from '../../../images/check-mark-black-outline.png';
import { Link } from 'react-router-dom';

function MoviesCard({ isSaved, pathname = '/movies', card }) {
  const bntElement =
    pathname === '/saved-movies' ? (
      <button type="button" className="movies-card__button">
        &#215;
      </button>
    ) : isSaved ? (
      <button
        type="button"
        className="movies-card__button movies-card__button_type_saved">
        <img
          src={markcheck}
          alt="Сохранено"
          className="movies-card__image movies-card__image_type_saved"
        />
      </button>
    ) : (
      <button type="button" className="movies-card__button">
        Сохранить
      </button>
    );

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <p className="movies-card__time">{card.duration}</p>
      </div>
      <div className="movies-card__wrapper">
        <Link
          className="movies-card__link"
          to={`${card.trailerLink}`}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={`https://api.nomoreparties.co/${card.image.url}`}
            alt="В погоне за Бенкси"
            className="movies-card__image"
          />
        </Link>
      </div>
      {bntElement}
    </article>
  );
}

export default MoviesCard;
