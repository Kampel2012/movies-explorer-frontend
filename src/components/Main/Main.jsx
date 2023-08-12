import { useContext, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AboutMe from './AboutMe/AboutMe';
import AboutProject from './AboutProject/AboutProject';
import Portfolio from './Portfolio/Portfolio';
import Promo from './Promo/Promo';
import Techs from './Techs/Techs';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';

function Main() {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/movies');
    }
  }, [isAuth, navigate]);

  return (
    <>
      <Header isAuth={false} />
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
