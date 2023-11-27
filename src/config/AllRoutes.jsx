import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/loader/PageLoader';
import Layout from '../layout/Layout';
import EmailConfirmation from '../pages/auth/EmailConfirmation';

const AllRoutes = () => {
  const NotFound = lazy(() => import('../pages/notFound/NotFound'));
  const Overview = lazy(() => import('../pages/dashboard/Overview'));
  const Home = lazy(() => import('../pages/homepage'));
  const Login = lazy(() => import('../pages/auth/Login'));
  const Signup = lazy(() => import('../pages/auth/Signup'));
  const GlobalIndex = lazy(() => import('../pages/globalIndex/GlobalIndex'));

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
          <Route path='/global-index' element={<GlobalIndex />} />
          <Route path='/dashboard' element={<Overview />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/verify-email' element={<EmailConfirmation />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
