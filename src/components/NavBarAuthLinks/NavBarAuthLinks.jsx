import { NavLink } from 'react-router-dom';

export const NavBarAuthLinks = () => {
  return (
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li>
        <NavLink>Profile</NavLink>
      </li>
      <li>
        <NavLink>Logout</NavLink>
      </li>
    </ul>
  );
};
