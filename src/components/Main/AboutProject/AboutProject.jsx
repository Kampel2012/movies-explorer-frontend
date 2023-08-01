import './AboutProject.css';

function AboutProject(props) {
  return (
    <section className="about-project">
      <div className="about-project__wrapper">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__container">
          <div className="about-project__advance">
            <p className="advance__title">Дипломный проект включал 5 этапов</p>
            <p className="advance__subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__advance">
            <p className="advance__title">
              На выполнение диплома ушло 5 недель
            </p>
            <p className="advance__subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div>
          <div className="about-project__progress-bar">
            <div className="about-project__progress about-project__progress_active">
              1 неделя
            </div>
            <div className="about-project__progress">4 недели</div>
          </div>
          <div className="about-project__progress-bar-description">
            <div className="about-project__progress-description about-project__progress-description_active">
              Back-end
            </div>
            <div className="about-project__progress-description">Front-end</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
