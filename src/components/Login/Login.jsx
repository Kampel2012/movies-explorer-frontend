import './Login.css';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login(props) {
  return (
    <section className="login">
      <form className="login-container">
        <div className="login-logo">
          <Link to={'/'}>
            <img src={logo} alt="Логотип" className="login-logo__image" />
          </Link>
        </div>
        <h2 className="login-form-title">Рады видеть!</h2>
        <div className="login-form-group">
          <label className="login-form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="login-form-input"
            type="email"
            name="email"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="login-error-message"></span>
        </div>
        <div className="login-form-group">
          <label className="login-form-label" htmlFor="password">
            Пароль
          </label>
          <input
            className="login-form-input login-form-input_type_error"
            type="password"
            name="password"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="login-error-message">Что-то пошло не так...</span>
        </div>
        <button type="submit" className="login-button">
          Войти
        </button>
        <p className="login-question">
          Ещё не зарегистрированы?{' '}
          <Link to={'/signup'} className="login-link">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
