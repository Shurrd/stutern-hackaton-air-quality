import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLoader from '../components/Loader/PageLoader';
import Layout from '../layout/Layout';

const AllRoutes = () => {
  const NotFound = lazy(() => import('../pages/notFound/NotFound'));
  const Overview = lazy(() => import('../pages/dashboard/Overview'));
  const Home = lazy(() => import('../pages/homepage'));

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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AllRoutes;
