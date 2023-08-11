import './Techs.css';
import Tech from './Tech/Tech';
import { getTechs } from '../../../utils/techs';

function Techs() {
  const techs = getTechs();
  const techsElem = techs.map((item, i) => <Tech key={i} text={item} />);

  return (
    <section className="techs">
      <div className="techs__container">
        <h3 className="techs__name-section">Технологии</h3>
        <div className="techs__wrapper">
          <h4 className="techs__title">7 технологий</h4>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <div className="techs__stack">{techsElem}</div>
        </div>
      </div>
    </section>
  );
}

export default Techs;
