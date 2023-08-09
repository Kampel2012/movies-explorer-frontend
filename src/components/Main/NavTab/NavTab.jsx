import './NavTab.css';

function NavTab() {
  return (
    <nav className="nav-tab">
      <button className="nav-tab__btn" type="button">
        <a className="nav-tab__link" href="#about-project">
          Узнать больше
        </a>
      </button>
    </nav>
  );
}

export default NavTab;
