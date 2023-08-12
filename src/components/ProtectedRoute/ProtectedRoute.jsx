import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

function ProtectedRoute({ element: Component, ...props }) {
  const { isAuth } = useContext(AuthContext);
  return (
    <>{isAuth ? <Component {...props} /> : <Navigate to="/signin" replace />}</>
  );
}

export default ProtectedRoute;
