import './Register.css';
import logo from './../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register(props) {
  return (
    <section className="register">
      <form className="register-container">
        <div className="register-logo">
          <Link to={'/'}>
            <img src={logo} alt="Логотип" className="register-logo__image" />
          </Link>
        </div>
        <h2 className="register-form-title">Добро пожаловать!</h2>
        <div className="register-form-group">
          <label className="register-form-label" htmlFor="name">
            Имя
          </label>
          <input
            className="register-form-input"
            type="text"
            name="name"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="register-error-message"></span>
        </div>
        <div className="register-form-group">
          <label className="register-form-label" htmlFor="email">
            E-mail
          </label>
          <input
            className="register-form-input"
            type="email"
            name="email"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="register-error-message"></span>
        </div>
        <div className="register-form-group">
          <label className="register-form-label" htmlFor="password">
            Пароль
          </label>
          <input
            className="register-form-input register-form-input_type_error"
            type="password"
            name="password"
            autoComplete="off"
            minLength={2}
            maxLength={30}
          />
          <span className="register-error-message">Что-то пошло не так...</span>
        </div>
        <button type="submit" className="register-button">
          Зарегистрироваться
        </button>
        <p className="register-question">
          Уже зарегистрированы?{' '}
          <Link to={'/signin'} className="register-link">
            Войти
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
