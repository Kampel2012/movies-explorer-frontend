import { useNavigate } from 'react-router-dom';
import logo from './../../images/logo.svg';
import iconMain from './../../images/icon__COLOR_icon-main.svg';
import './Header.css';
import { useLocation } from 'react-router-dom';

function Header({ isAuth }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const headerStyle = pathname === '/' ? 'header header_type_main' : 'header';

  return (
    <header className={headerStyle}>
      <div className="header__container">
        <img src={logo} alt="Логотип" className="header__logo" />
        {!isAuth ? (
          <div className="header__wrapper">
            <button className="header__btn" onClick={() => navigate('/signup')}>
              Регистрация
            </button>
            <button
              className="header__btn btn_populary"
              onClick={() => navigate('/signin')}>
              Войти
            </button>
          </div>
        ) : (
          <div className="header__wrapper header__wrapper_type_auth">
            <div className="header__buttons-wrapper">
              <button
                className="header__btn"
                onClick={() => navigate('/signup')}>
                Фильмы
              </button>
              <button
                className="header__btn"
                onClick={() => navigate('/signup')}>
                Сохранённые фильмы
              </button>
            </div>

            <label className="header__profile">
              <button
                className="header__btn"
                onClick={() => navigate('/signup')}>
                Аккаунт
              </button>
              <img
                src={iconMain}
                alt="Переход на страницу профиля"
                className="header__icon"
              />
            </label>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
