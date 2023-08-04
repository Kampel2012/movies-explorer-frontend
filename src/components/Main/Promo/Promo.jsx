import './Promo.css';
import promoLogo from './../../../images/text__COLOR_landing-logo.png';

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <div className="promo__container">
          <div>
            <h1 className="promo__title">
              Учебный проект студента факультета Веб-разработки.
            </h1>
            <p className="promo__subtitle">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <div>
            <img src={promoLogo} alt="Промо-лого" />
          </div>
        </div>
        <button type="button" className="promo__btn">
          Узнать больше
        </button>
      </div>
    </section>
  );
}

export default Promo;
