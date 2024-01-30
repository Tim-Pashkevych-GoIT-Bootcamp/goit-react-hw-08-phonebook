import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from './../redux/selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ redirectTo, children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
