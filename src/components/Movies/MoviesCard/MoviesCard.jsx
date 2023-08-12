import './MoviesCard.css';
import markcheck from '../../../images/check-mark-black-outline.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function MoviesCard({ card, _id, saveMovie, removeMovie }) {
  const formatTime = (totalMinuts) => {
    const hours = Math.floor(totalMinuts / 60);
    const minutes = Math.floor(totalMinuts % 60);
    return `${hours > 0 ? String(hours) + 'ч' : ''} ${String(minutes)}м`;
  };

  const [saved, setSaved] = useState(Boolean(_id));

  async function handleSaveMovie() {
    try {
      await saveMovie(card);
      setSaved(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRemoveMovie() {
    try {
      await removeMovie(_id);
      setSaved(false);
    } catch (error) {
      console.log(error);
    }
  }

  const bntElement = saved ? (
    <button
      type="button"
      onClick={handleRemoveMovie}
      className="movies-card__button movies-card__button_type_saved">
      <img
        src={markcheck}
        alt="Сохранено"
        className="movies-card__image movies-card__image_type_saved"
      />
    </button>
  ) : (
    <button
      type="button"
      className="movies-card__button"
      onClick={handleSaveMovie}>
      Сохранить
    </button>
  );

  return (
    <article className="movies-card">
      <div className="movies-card__info">
        <h2 className="movies-card__title">{card.nameRU}</h2>
        <p className="movies-card__time">{formatTime(card.duration)}</p>
      </div>
      <div className="movies-card__wrapper">
        <Link
          className="movies-card__link"
          to={`${card.trailerLink}`}
          target="_blank"
          rel="noopener noreferrer">
          <img
            src={`https://api.nomoreparties.co/${card.image.url}`}
            alt={card.description}
            className="movies-card__image"
          />
        </Link>
      </div>
      {bntElement}
    </article>
  );
}

export default MoviesCard;
