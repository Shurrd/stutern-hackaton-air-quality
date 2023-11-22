import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/loader/PageLoader';
import Layout from '../components/layout/Layout';

const AllRoutes = () => {
  const NotFound = lazy(() => import('../pages/notFound/NotFound'));
  const Overview = lazy(() => import('../pages/dashboard/Overview'));
  const Home = lazy(() => import('../pages/homepage'));
  const Login = lazy(() => import('../pages/auth/Login'));
  const Signup = lazy(() => import('../pages/auth/Signup'));

  return (
    <Suspense fallback={<PageLoader />}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/home' element={<Home />} />
          </Routes>
        </Layout>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/dashboard' element={<Overview />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
