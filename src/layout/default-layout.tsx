import Header from '@/components/core/header';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="bg-base-600  h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
