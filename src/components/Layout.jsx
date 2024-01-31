import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Suspense } from 'react';
import { UserMenu } from './UserMenu/UserMenu';
import { Drawer } from './Drawer/Drawer';
import { Loader } from './Loader/Loader';

const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <Drawer id="user-menu-drawer" position="start">
        <UserMenu />
      </Drawer>
    </>
  );
};

export default Layout;
