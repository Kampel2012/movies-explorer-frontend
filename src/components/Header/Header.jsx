import { useNavigate } from 'react-router-dom';
import logo from './../../images/logo.svg';
import './Header.css';

function Header(props) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__container">
        <button className="header__btn" onClick={() => navigate('/signup')}>
          Регистрация
        </button>
        <button
          className="header__btn btn_populary"
          onClick={() => navigate('/signin')}>
          Войти
        </button>
      </div>
    </header>
  );
}

export default Header;
