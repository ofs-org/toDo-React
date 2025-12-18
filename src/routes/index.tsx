import DefaultLayout from '@/layout/default-layout';
import PageComponents from '@/pages/components';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';

const DefaultRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<PageComponents />} />
      </Route>
    </Routes>
  );
};

export default DefaultRoutes;
