import { useDispatch, useSelector } from 'react-redux';
import { selectAuthIsLoggedIn, selectAuthUser } from './../../redux/selectors';
import { Link, useNavigate } from 'react-router-dom';
import { userLogout } from './../../redux/auth/operations';
import { LOGIN_FORM_ID, REGISTER_FORM_ID } from 'utils/constants';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userLogout());
    navigate('/', { replace: true });
  };

  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
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
            <Link
              onClick={() => document.getElementById(LOGIN_FORM_ID).showModal()}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              onClick={() =>
                document.getElementById(REGISTER_FORM_ID).showModal()
              }
            >
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};
