import './Login.css';
import logo from './../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { api } from '../../utils/api';

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const { jwt: token } = await api.apiAuth.signin({ email, password });
      localStorage.setItem('TOKEN', token);
      setEmail('');
      setPassword('');
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

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
              minLength={2}
              maxLength={30}
              required={true}
              placeholder="pochta@yandex.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
