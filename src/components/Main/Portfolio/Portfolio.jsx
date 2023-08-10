import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio(props) {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h3 className="portfolio__name-section">Портфолио</h3>
        <ul className="portfolio__nav">
          <li className="portfolio__wrapper">
            <Link
              className="portfolio__link"
              target="_blank"
              to={'https://github.com/Kampel2012/russian-travel'}>
              Статичный сайт
            </Link>
            <span className="portfolio__arrow">↗</span>
          </li>
          <li className="portfolio__wrapper">
            <Link
              className="portfolio__link"
              target="_blank"
              to={'https://github.com/Kampel2012/PicSearcher'}>
              Адаптивный сайт
            </Link>
            <span className="portfolio__arrow">↗</span>
          </li>
          <li className="portfolio__wrapper">
            <Link
              className="portfolio__link"
              target="_blank"
              to={'https://github.com/Kampel2012/slice-and-dice'}>
              Одностраничное приложение
            </Link>
            <span className="portfolio__arrow">↗</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
