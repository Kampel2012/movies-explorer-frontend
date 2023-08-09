import './Register.css';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
  return (
    <section className="register">
      <form className="register__container">
        <div className="register__logo">
          <Link to={'/'}>
            <img src={logo} alt="Логотип" className="register__logo-image" />
          </Link>
        </div>
        <h2 className="register__form-title">Добро пожаловать!</h2>
        <div className="register__form-group">
          <label className="register__form-label" htmlFor="name">
            Имя
          </label>
          <input
            className="register__form-input"
            type="text"
            name="name"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="register__error-message"></span>
        </div>
        <div className="register__form-group">
          <label className="register__form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="register__form-input"
            type="email"
            name="email"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="register__error-message"></span>
        </div>
        <div className="register__form-group">
          <label className="register__form-label" htmlFor="password">
            Пароль
          </label>
          <input
            className="register__form-input register__form-input_type_error"
            type="password"
            name="password"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="register__error-message">
            Что-то пошло не так...
          </span>
        </div>
        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>
        <p className="register__question">
          Уже зарегистрированы?{' '}
          <Link to={'/signin'} className="register__link">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
