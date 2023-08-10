import Header from '../Header/Header';
import './Profile.css';

function Profile({ name = 'Виталий', email = 'pochta@yandex.ru' }) {
  return (
    <>
      <Header isAuth={true} />
      <main className="profile">
        <div className="profile__container">
          <div className="profile__info">
            <h1 className="profile__title">{`Привет, ${name}!`}</h1>
            <p className="profile__info-field">
              <span className="profile__tag">Имя</span>
              <span className="profile__tag">{name}</span>
            </p>
            <p className="profile__info-field">
              <span className="profile__tag">E-mail</span>
              <span className="profile__tag">{email}</span>
            </p>
          </div>
          <div className="profile__wrapper">
            <button type="button" className="profile__btn">
              Редактировать
            </button>
            <button
              type="button"
              className="profile__btn profile__btn_type_exit">
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
