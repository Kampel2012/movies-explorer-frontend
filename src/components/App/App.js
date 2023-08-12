import { useRoutes } from 'react-router';
import './App.css';
import routes from '../../routes';
import './../../utils/api/index';

function App() {
  const element = useRoutes(routes);

  return <div className="App">{element}</div>;
}

export default App;
