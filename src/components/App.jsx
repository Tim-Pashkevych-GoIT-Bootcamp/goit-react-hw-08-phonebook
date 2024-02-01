import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { loadCurrentUser } from './../redux/auth/operations';
import { selectAuthIsCurrentUserLoaded } from './../redux/selectors';

import { Loader } from './Loader/Loader';
const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('./../pages/Home/Home'));
const Contacts = lazy(() => import('./../pages/Contacts/Contacts'));
const NotFound = lazy(() => import('./../pages/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentUserLoaded = useSelector(selectAuthIsCurrentUserLoaded);

  useEffect(() => {
    dispatch(loadCurrentUser());
  }, [dispatch]);

  return isCurrentUserLoaded ? (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Layout />
          </Suspense>
        }
      >
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
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  ) : (
    <Loader />
  );
};
