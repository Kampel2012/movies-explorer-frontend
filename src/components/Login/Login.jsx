import './Login.css';
import logo from './../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { api } from '../../utils/api';
import useInput from '../hooks/useInput';

function Login() {
  const [error, setError] = useState('');
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const email = useInput('', {
    isEmpty: true,
    minLength: 2,
    maxLength: 30,
    isEmail: true,
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
      const { jwt: token } = await api.main.signin({
        email: email.value,
        password: password.value,
      });
      localStorage.setItem('TOKEN', token);
      setIsAuth(true);
    } catch (error) {
      if (error === 'Ошибка: 401') {
        setError('Неверный логин или пароль');
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
    <main className="login">
      <form onSubmit={onSubmit} className="login__form">
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
              placeholder="pochta@yandex.ru"
              value={email.value}
              onChange={(e) => handleChange(e, email.onChange)}
              onBlur={(e) => email.onBlur(e)}
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

          <label className="login__form-label" htmlFor="password">
            Пароль
            <input
              className="login__form-input"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              placeholder="••••••••"
              value={password.value}
              onChange={(e) => handleChange(e, password.onChange)}
              onBlur={(e) => password.onBlur(e)}
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
        <div className="login__wrapper login__wrapper_type_bottom ">
          {error && (
            <span className="login__error login__error_type_bottom">
              {error}
            </span>
          )}
          <button
            type="submit"
            className="login__button"
            disabled={
              !email.inputValid || !password.inputValid || error || isLoading
            }>
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
