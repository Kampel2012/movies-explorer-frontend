import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__name-section">Портфолио</h3>
        <nav className="portfolio__nav">
          <li className="portfolio__wrapper">
            <Link className="portfolio__link">Статичный сайт</Link>
            <span className="portfolio__arrow">↗</span>
          </li>
          <li className="portfolio__wrapper">
            <Link className="portfolio__link">Адаптивный сайт</Link>
            <span className="portfolio__arrow">↗</span>
          </li>
          <li className="portfolio__wrapper">
            <Link className="portfolio__link">Одностраничное приложение</Link>
            <span className="portfolio__arrow">↗</span>
          </li>
        </nav>
      </div>
    </section>
  );
}

export default Portfolio;
