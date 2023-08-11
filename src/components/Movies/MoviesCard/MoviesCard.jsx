import './MoviesCard.css';
import markcheck from '../../../images/check-mark-black-outline.png';

function MoviesCard({ isSaved, pathname = '/movies' }) {
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
        <h2 className="movies-card__title">В погоне за Бенкси</h2>
        <p className="movies-card__time">27 минут</p>
      </div>
      <img
        src={
          'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663323054_20-mykaleidoscope-ru-p-yelizaveta-shakira-krasivo-20.jpg'
        }
        alt="В погоне за Бенкси"
        className="movies-card__image"
      />
      {bntElement}
    </article>
  );
}

export default MoviesCard;
