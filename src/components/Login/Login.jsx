import './Login.css';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <main className="login">
      <form className="login__form">
        <div className="login__wrapper">
          <Link to={'/'}>
            <img src={logo} alt="Логотип" className="login__logo-image" />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
          <label className="login__form-label" htmlFor="email">
            E-mail
            <input
              className="login__form-input"
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

          <label className="login__form-label" htmlFor="password">
            Пароль
            <input
              className="login__form-input"
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
        <div className="login__wrapper">
          <button type="submit" className="login__button">
            Войти
          </button>
          <p className="login__question">
            Ещё не зарегистрированы?{' '}
            <Link to={'/signup'} className="login__link">
              Регистрация
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
}

export default Login;
