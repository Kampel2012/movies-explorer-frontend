import { useRoutes } from 'react-router';
import './App.css';
import routes from '../../routes';
import './../../utils/api/index';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { api } from './../../utils/api/index';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import Preloader from '../Movies/Preloader/Preloader';

function App() {
  const element = useRoutes(routes);
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem('TOKEN')));
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('TOKEN');
      if (!token) return;
      setIsLoading(true);
      try {
        const user = await api.main.checkToken(token);
        setCurrentUser(user);
        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkToken();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">{isLoading ? <Preloader /> : element}</div>
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
