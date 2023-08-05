import iconMain from './../../images/icon__COLOR_icon-main.svg';
import iconHamburger from './../../images/icon__hamburger.svg';
import './Navigation.css';
import { Link } from 'react-router-dom';
import MenuPopup from './../Popups/MenuPopup';
import { useState } from 'react';

function Navigation(props) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="navigation__container">
      <div className="navigation__wrapper">
        <div className="navigation__buttons-wrapper">
          <Link className="navigation__btn" to={'/movies'}>
            Фильмы
          </Link>
          <Link className="navigation__btn" to={'/saved-movies'}>
            Сохранённые фильмы
          </Link>
        </div>

        <Link
          className="navigation__btn navigation__btn_type_profile"
          to={'/profile'}>
          Аккаунт
          <img
            src={iconMain}
            alt="Переход на страницу профиля"
            className="navigation__icon"
          />
        </Link>
      </div>
      <div className="navigation__btn_tab">
        <button
          onClick={() => setShowPopup(true)}
          type="button"
          className="navigation__btn">
          <img
            src={iconHamburger}
            alt="Открыть меню"
            className="navigation__icon navigation__icon_type_burger"
          />
        </button>
      </div>
      <MenuPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

export default Navigation;
