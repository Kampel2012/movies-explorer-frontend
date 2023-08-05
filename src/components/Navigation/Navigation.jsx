import iconMain from './../../images/icon__COLOR_icon-main.svg';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className="header__wrapper">
      <div className="header__buttons-wrapper">
        <Link className="header__btn" to={'/movies'}>
          Фильмы
        </Link>
        <Link className="header__btn" to={'/saved-movies'}>
          Сохранённые фильмы
        </Link>
      </div>

      <label className="header__profile">
        <Link className="header__btn" to={'/profile'}>
          Аккаунт
        </Link>
        <img
          src={iconMain}
          alt="Переход на страницу профиля"
          className="header__icon"
        />
      </label>
    </div>
  );
}

export default Navigation;
