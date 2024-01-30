import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from './../redux/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ redirectTo, children }) => {
  console.log('🚀 ~ PrivateRoute ~ redirectTo:', redirectTo);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  console.log('🚀 ~ PrivateRoute ~ isLoggedIn:', isLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
