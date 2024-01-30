import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useDispatch } from 'react-redux';
import { loadCurrentUser } from './../redux/auth/operations';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';

const Home = lazy(() => import('./../pages/Home/Home'));
const Contacts = lazy(() => import('./../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute redirectTo="contacts">
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/">
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
