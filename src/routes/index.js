import Main from './../components/Main/Main';
import Movies from './../components/Movies/Movies';
import SavedMovies from './../components/SavedMovies/SavedMovies';
import Profile from './../components/Profile/Profile';
import Login from './../components/Login/Login';
import Register from './../components/Register/Register';
import Page404 from '../components/Page404/Page404';

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
  {
    path: '*',
    element: <Page404 />,
  },
];

export default routes;
