import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from './../redux/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ redirectTo, children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
