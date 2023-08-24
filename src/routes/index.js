import Main from './../components/Main/Main';
import Movies from './../components/Movies/Movies';
import SavedMovies from './../components/SavedMovies/SavedMovies';
import Profile from './../components/Profile/Profile';
import Login from './../components/Login/Login';
import Register from './../components/Register/Register';
import Page404 from '../components/Page404/Page404';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/movies',
    element: <ProtectedRoute element={Movies} />,
  },
  {
    path: '/saved-movies',
    element: <ProtectedRoute element={SavedMovies} />,
  },
  {
    path: '/profile',
    element: <ProtectedRoute element={Profile} />,
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
