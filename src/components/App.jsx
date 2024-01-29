import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Home = lazy(() => import('./../pages/Home/Home'));
const Contacts = lazy(() => import('./../pages/Contacts/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
