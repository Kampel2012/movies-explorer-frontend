import './MoviesCard.css';
import markcheck from '../../../images/check-mark-black-outline.png';
import { Link } from 'react-router-dom';
import { api } from '../../../utils/api';
import { useState } from 'react';

function MoviesCard({ pathname = '/movies', card, _id }) {
  const formatTime = (totalMinuts) => {
    const hours = Math.floor(totalMinuts / 60);
    const minutes = Math.floor(totalMinuts % 60);
    return `${hours > 0 ? String(hours) + 'ч' : ''} ${String(minutes)}м`;
  };

  const [saved, setSaved] = useState(Boolean(_id));
  const [currentId, setCurrentId] = useState(_id);

  async function saveMovie() {
    try {
      const res = await api.main.addNewMovie(card);
      setCurrentId(res._id);
      setSaved(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeMovie() {
    try {
      await api.main.deleteMovie(currentId);
      setSaved(false);
    } catch (error) {
      console.log(error);
    }
  }

  const bntElement =
    pathname === '/saved-movies' ? (
      <button type="button" className="movies-card__button">
        &#215;
      </button>
    ) : saved ? (
      <button
        type="button"
        onClick={removeMovie}
        className="movies-card__button movies-card__button_type_saved">
        <img
          src={markcheck}
          alt="Сохранено"
          className="movies-card__image movies-card__image_type_saved"
        />
      </button>
    ) : (
      <button type="button" className="movies-card__button" onClick={saveMovie}>
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
