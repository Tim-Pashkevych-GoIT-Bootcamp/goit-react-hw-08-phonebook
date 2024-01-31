import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { useDispatch, useSelector } from 'react-redux';
import { loadCurrentUser } from './../redux/auth/operations';
import { PublicRoute } from 'routes/PublicRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { selectAuthIsCurrentUserLoaded } from './../redux/selectors';
import { Loader } from './Loader/Loader';

const Home = lazy(() => import('./../pages/Home/Home'));
const Contacts = lazy(() => import('./../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentUserLoaded = useSelector(selectAuthIsCurrentUserLoaded);

  useEffect(() => {
    dispatch(loadCurrentUser());
  }, [dispatch]);

  return isCurrentUserLoaded ? (
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
      <Route
        path="*"
        element={
          <PublicRoute redirectTo="contacts">
            <h2>Not found</h2>
          </PublicRoute>
        }
      />
    </Routes>
  ) : (
    <Loader />
  );
};
