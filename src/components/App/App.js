import { useRoutes } from 'react-router';
import './App.css';
import routes from '../../routes';

function App() {
  const element = useRoutes(routes);

  return (
    <div className="App">
      <p>learn react</p>
      {element}
    </div>
  );
}

export default App;
