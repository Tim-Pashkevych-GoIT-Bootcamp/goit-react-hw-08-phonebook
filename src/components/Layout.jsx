import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Suspense } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import { Drawer } from './Drawer/Drawer';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Drawer id="user-menu-drawer" position="start">
        <UserMenu />
      </Drawer>
    </>
  );
};

export default Layout;
