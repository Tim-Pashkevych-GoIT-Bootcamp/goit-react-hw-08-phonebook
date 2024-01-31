import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsLoggedIn, selectAuthUser } from './../../redux/selectors';
import { Link } from 'react-router-dom';
import { userLogout } from './../../redux/auth/operations';
import { LOGIN_FORM_ID, REGISTER_FORM_ID } from 'utils/constants';
import { toggleModal } from './../../redux/auth/authSlice';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  const closeDrawer = () => {
    document.getElementById('user-menu-drawer').click();
  };

  const logout = () => {
    dispatch(userLogout());
    closeDrawer();
  };

  const showLogin = () => {
    document.getElementById(LOGIN_FORM_ID).showModal();
    dispatch(toggleModal());
    closeDrawer();
  };

  const showRegister = () => {
    document.getElementById(REGISTER_FORM_ID).showModal();
    dispatch(toggleModal());
    closeDrawer();
  };

  return (
    <ul>
      {isLoggedIn ? (
        <>
          <li>
            <Link>{user.email}</Link>
          </li>
          <li>
            <Link onClick={logout}>Logout</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link onClick={showLogin}>Login</Link>
          </li>
          <li>
            <Link onClick={showRegister}>Register</Link>
          </li>
        </>
      )}
    </ul>
  );
};
