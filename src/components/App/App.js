import { useRoutes } from 'react-router';
import './App.css';
import routes from '../../routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  const element = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      {element}
      <Footer />
    </div>
  );
}

export default App;
