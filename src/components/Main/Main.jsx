import { useContext } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import { AuthContext } from '../../context/AuthContext';

function Main() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <Header isAuth={isAuth} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
