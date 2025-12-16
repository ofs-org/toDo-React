import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const DefaultLayout = () => {
  return (
    <div className="flex  flex-col container">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
