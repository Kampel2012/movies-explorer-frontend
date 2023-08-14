import { useRoutes } from 'react-router';
import './App.css';
import routes from '../../routes';
import './../../utils/api/index';
import { useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { api } from './../../utils/api/index';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App() {
  const element = useRoutes(routes);
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('TOKEN');
      if (!token) return;
      try {
        const user = await api.main.checkToken(token);
        setCurrentUser(user);
        setIsAuth(true);
      } catch (error) {
        setIsAuth(false);
      }
    };
    checkToken();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">{element}</div>
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
