import Header from '@/components/core/header';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex  flex-col container">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
