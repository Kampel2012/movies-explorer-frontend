import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__year">© 2023</p>
        <nav className="footer__nav">
          <Link
            className="footer__nav_link"
            to={'https://practicum.yandex.ru/'}>
            Яндекс.Практикум
          </Link>
          <Link
            className="footer__nav_link"
            to={'https://github.com/Kampel2012'}>
            GitHub
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
