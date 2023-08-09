import { Link } from 'react-router-dom';
import './AboutMe.css';
import photo from './../../../images/photo.JPG';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h3 className="about-me__name-section">Студент</h3>
        <div className="about-me__wrapper">
          <div className="about-me__info">
            <div>
              <h4 className="about-me__name">Тони</h4>
              <p className="about-me__job">Фронтенд-разработчик, 26 лет</p>
              <p className="about-me__about">
                Я родился и живу в Оренбурге, закончил факультет юриспруденции
                ОГУ. У меня есть жена. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2019 года работал в компании «ООО
                Сладковско-Заречное». После того, как начал курс по
                веб-разработке, начал заниматься фриланс-заказами и ушёл с
                постоянной работы.
              </p>
            </div>
            <div>
              <Link
                className="about-me__link"
                to={'https://github.com/Kampel2012'}>
                Github
              </Link>
            </div>
          </div>
          <div>
            <img className="about-me__photo" src={photo} alt="Фотография" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
