import './Login.css';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <section className="login">
      <form className="login__container">
        <div className="login__logo">
          <Link to={'/'}>
            <img src={logo} alt="Логотип" className="login__logo-image" />
          </Link>
        </div>
        <h2 className="login__form-title">Рады видеть!</h2>
        <div className="login__form-group">
          <label className="login__form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="login__form-input"
            type="email"
            name="email"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="login__error-message"></span>
        </div>
        <div className="login__form-group">
          <label className="login__form-label" htmlFor="password">
            Пароль
          </label>
          <input
            className="login__form-input login__form-input_type_error"
            type="password"
            name="password"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="login__error-message">Что-то пошло не так...</span>
        </div>
        <button type="submit" className="login__button">
          Войти
        </button>
        <p className="login__question">
          Ещё не зарегистрированы?{' '}
          <Link to={'/signup'} className="login__link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
