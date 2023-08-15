import './Register.css';
import logo from './../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { api } from '../../utils/api';
import useInput from '../hooks/useInput';

function Register() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const email = useInput('', {
    isEmpty: true,
    minLength: 2,
    maxLength: 30,
    isEmail: true,
  });

  const name = useInput('', {
    isEmpty: true,
    minLength: 2,
    maxLength: 30,
    isName: true,
  });

  const password = useInput('', {
    isEmpty: true,
    minLength: 2,
    maxLength: 30,
  });

  useEffect(() => {
    if (isAuth) {
      navigate('/movies', { replace: true });
    }
  }, [isAuth, navigate]);

  async function onSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await api.main.signup({
        email: email.value,
        password: password.value,
        name: name.value,
      });
      const { jwt: token } = await api.main.signin({
        email: email.value,
        password: password.value,
      });
      localStorage.setItem('TOKEN', token);
      setIsAuth(true);
    } catch (error) {
      if (error === 'Ошибка: 409') {
        setError('Пользователь с таким E-mail уже существует.');
      } else {
        setError('Что-то пошло не так...');
      }
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e, cb) {
    if (error !== '') {
      setError('');
    }
    cb(e);
  }

  return (
    <main className="register">
      <form className="register__form" onSubmit={onSubmit}>
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
              placeholder="Виталий"
              value={name.value}
              onBlur={(e) => name.onBlur(e)}
              onChange={(e) => handleChange(e, name.onChange)}
            />
            {name.isDirty && !name.inputValid && (
              <span className="login__error">
                {name.EmptyError ||
                  name.minLengthError ||
                  name.maxLengthError ||
                  name.nameError}
              </span>
            )}
          </label>

          <label className="register__form-label" htmlFor="email">
            E-mail
            <input
              className="register__form-input"
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              placeholder="pochta@yandex.ru"
              value={email.value}
              onBlur={(e) => email.onBlur(e)}
              onChange={(e) => handleChange(e, email.onChange)}
            />
            {email.isDirty && !email.inputValid && (
              <span className="login__error">
                {email.EmptyError ||
                  email.minLengthError ||
                  email.maxLengthError ||
                  email.emailError}
              </span>
            )}
          </label>

          <label className="register__form-label" htmlFor="password">
            Пароль
            <input
              className="register__form-input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="••••••••"
              value={password.value}
              onBlur={(e) => password.onBlur(e)}
              onChange={(e) => handleChange(e, password.onChange)}
            />
            {password.isDirty && !password.inputValid && (
              <span className="login__error">
                {password.EmptyError ||
                  password.minLengthError ||
                  password.maxLengthError}
              </span>
            )}
          </label>
        </div>
        <div className="register__wrapper register__wrapper_type_bottom">
          {error && (
            <span className="register__error register__error_type_bottom">
              {error}
            </span>
          )}
          <button
            disabled={
              !email.inputValid ||
              !password.inputValid ||
              !name.inputValid ||
              error ||
              isLoading
            }
            type="submit"
            className="register__button">
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
