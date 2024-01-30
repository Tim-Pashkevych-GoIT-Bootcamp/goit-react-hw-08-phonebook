import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Suspense } from 'react';
import { UserMenu } from './UserMenu/UserMenu';

const Layout = () => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <UserMenu />
      </div>
    </div>
  );
};

export default Layout;
