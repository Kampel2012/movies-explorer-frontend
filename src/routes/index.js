import Main from './../components/Main/Main';
import Movies from './../components/Movies/Movies';
import SavedMovies from './../components/SavedMovies/SavedMovies';
import Profile from './../components/Profile/Profile';
import Login from './../components/Login/Login';
import Register from './../components/Register/Register';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/movies',
    element: <Movies />,
  },
  {
    path: '/saved-movies',
    element: <SavedMovies />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/signin',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Register />,
  },
];

export default routes;
