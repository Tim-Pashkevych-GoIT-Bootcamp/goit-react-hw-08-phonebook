import { NavLink } from 'react-router-dom';
import { LOGIN_FORM_ID, REGISTER_FORM_ID } from 'utils/constants';

export const NavBarUnAuthLinks = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <NavLink
          onClick={() => document.getElementById(LOGIN_FORM_ID).showModal()}
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => document.getElementById(REGISTER_FORM_ID).showModal()}
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};
