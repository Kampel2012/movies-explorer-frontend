import Header from '../Header/Header';
import './Profile.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useInput from '../hooks/useInput';
import { api } from '../../utils/api';

function Profile() {
  const { setIsAuth } = useContext(AuthContext);
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [error, setError] = useState('');

  const name = useInput(currentUser.name, {
    isEmpty: true,
    minLength: 2,
    maxLength: 30,
    isName: true,
  });

  const email = useInput(currentUser.email, {
    isEmpty: true,
    minLength: 2,
    maxLength: 30,
    isEmail: true,
  });

  function exit() {
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('filter');
    localStorage.removeItem('TOKEN');
    setIsAuth(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const updateUser = await api.main.editProfile({
        name: name.value,
        email: email.value,
      });
      setCurrentUser(updateUser);
      setError('');
    } catch (error) {
      setError('Что-то пошло не так...');
    }
  }

  return (
    <>
      <Header isAuth={true} />
      <main className="profile">
        <form className="profile__container" onSubmit={handleSubmit}>
          <div className="profile__info">
            <h1
              onClick={() => console.log(name, email)}
              className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
            <fieldset className="profile__info-field">
              <span className="profile__tag">Имя</span>
              <input
                className="profile__input"
                type="text"
                value={name.value}
                onChange={(e) => name.onChange(e)}
                onBlur={(e) => name.onBlur(e)}
                placeholder="Имя"
              />
              {name.isDirty && !name.inputValid && (
                <span className="profile__error">
                  {name.EmptyError ||
                    name.minLengthError ||
                    name.maxLengthError ||
                    name.nameError}
                </span>
              )}
            </fieldset>
            <fieldset className="profile__info-field">
              <span className="profile__tag">E-mail</span>
              <input
                className="profile__input"
                type="email"
                value={email.value}
                onChange={(e) => email.onChange(e)}
                onBlur={(e) => email.onBlur(e)}
                placeholder="E-mail"
              />
              {email.isDirty && !email.inputValid && (
                <span className="profile__error">
                  {email.EmptyError ||
                    email.minLengthError ||
                    email.maxLengthError ||
                    email.emailError}
                </span>
              )}
            </fieldset>
          </div>
          <div className="profile__wrapper">
            {error && (
              <span className="profile__error profile__error_type_bottom">
                {error}
              </span>
            )}
            <button
              type="sumbit"
              className="profile__btn"
              disabled={!name.inputValid || !email.inputValid}>
              Редактировать
            </button>
            <button
              type="button"
              onClick={exit}
              className="profile__btn profile__btn_type_exit">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default Profile;
