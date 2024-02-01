import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsLoggedIn, selectAuthUser } from './../../redux/selectors';
import { userLogout } from './../../redux/auth/operations';
import { LOGIN_FORM_ID, REGISTER_FORM_ID } from 'utils/constants';
import { closeDrawer, toggleModal } from './../../redux/app/appSlice';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);

  const logout = () => {
    dispatch(userLogout());
    dispatch(closeDrawer('user-menu-drawer'));
  };

  const showLogin = () => {
    dispatch(toggleModal(LOGIN_FORM_ID));
    dispatch(closeDrawer('user-menu-drawer'));
  };

  const showRegister = () => {
    dispatch(toggleModal(REGISTER_FORM_ID));
    dispatch(closeDrawer('user-menu-drawer'));
  };

  return (
    <ul className="text-lg">
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
