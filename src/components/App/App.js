import { useRoutes } from 'react-router';
import './App.css';
import routes from '../../routes';
import MenuPopup from '../Popups/MenuPopup';
import { useState } from 'react';

function App() {
  const element = useRoutes(routes);
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      {element}
      <MenuPopup isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;
