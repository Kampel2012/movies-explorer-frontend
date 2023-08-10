import './Register.css';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
  return (
    <main className="register">
      <form className="register__form">
        <div className="register__wrapper">
          <Link to={'/'}>
            <img src={logo} alt="Логотип" className="register__logo-image" />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
          <label className="register__form-label" htmlFor="name">
            Имя
            <input
              className="register__form-input"
              id="name"
              type="name"
              name="name"
              autoComplete="off"
              minLength={2}
              maxLength={30}
              required={true}
              placeholder="Виталий"
            />
          </label>

          <label className="register__form-label" htmlFor="email">
            E-mail
            <input
              className="register__form-input"
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              minLength={2}
              maxLength={30}
              required={true}
              placeholder="pochta@yandex.ru"
            />
          </label>

          <label className="register__form-label" htmlFor="password">
            Пароль
            <input
              className="register__form-input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              minLength={2}
              maxLength={30}
              required={true}
              placeholder="••••••••"
            />
          </label>
        </div>
        <div className="register__wrapper">
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
          <p className="register__question">
            Уже зарегистрированы?{' '}
            <Link to={'/signin'} className="register__link">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Register;
